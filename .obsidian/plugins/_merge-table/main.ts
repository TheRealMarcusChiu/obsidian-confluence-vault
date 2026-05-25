import {
  App,
  Component,
  MarkdownPostProcessorContext,
  MarkdownRenderer,
  Plugin,
  TFile,
  WorkspaceLeaf,
} from "obsidian";

// ─── Constants ───────────────────────────────────────────────────────────────

const MAX_DEPTH = 8;
const DEPTH_ATTR = "data-merge-depth";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TableDef {
  rows: CellValue[][];
  caption?: string;
  tableStyle?: string;
}

export type ContentValue = string | TableDef | (string | TableDef)[];

export interface CellDef {
  content?: ContentValue;
  colspan?: number;
  rowspan?: number;
  bg?: string;
  color?: string;
  align?: "left" | "center" | "right";
  header?: boolean;
  valign?: "top" | "middle" | "bottom";
}

export type CellValue = CellDef | string | null;

// ─── Plugin ──────────────────────────────────────────────────────────────────

export default class MergeTablePlugin extends Plugin {
  /** MutationObservers attached to Live Preview editor panes, keyed by leaf id. */
  private leafObservers = new Map<string, MutationObserver>();

  async onload() {
    console.log("Merge Table Plugin: loading");

    // ── 1. Render merge-table code blocks ─────────────────────────────────
    this.registerMarkdownCodeBlockProcessor(
      "merge-table",
      async (source, el, ctx) => {
        const depth = this.getDepthFromDOM(el);
        await this.handleCodeBlock(source, el, ctx, depth);
      }
    );

    // ── 2. Reading mode — post-processor resolves ![[file#^id]] embeds.
    //
    // Obsidian's MetadataCache never indexes ^blockid patterns inside fenced
    // code blocks, so standard block embeds always fail for merge-table content.
    // This post-processor intercepts every rendered internal embed whose href
    // contains "#^", reads the referenced file, searches its merge-table blocks
    // for the block ID, and renders the matching content directly.
    this.registerMarkdownPostProcessor(async (el, ctx) => {
      await this.resolveMergeTableEmbeds(el, ctx.sourcePath);
    });

    // ── 3. Live Preview (editor) mode — MutationObserver approach.
    //
    // CM6 renders embeds as widgets outside the post-processor pipeline.
    // We watch every editor pane's DOM for unresolved internal-embed spans
    // that reference block IDs and resolve them the same way.
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        if (leaf) this.attachLeafObserver(leaf);
      })
    );

    this.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.app.workspace.iterateAllLeaves((leaf) => {
          this.attachLeafObserver(leaf);
        });
      })
    );

    // Attach to any leaves already open at load time.
    this.app.workspace.iterateAllLeaves((leaf) => {
      this.attachLeafObserver(leaf);
    });
  }

  onunload() {
    // Disconnect all MutationObservers.
    this.leafObservers.forEach((obs) => obs.disconnect());
    this.leafObservers.clear();
    console.log("Merge Table Plugin: unloading");
  }

  // ── MutationObserver management ───────────────────────────────────────────

  /**
   * Attach a MutationObserver to `leaf`'s container.
   *
   * Key design decisions:
   *  - Source path is read dynamically at callback time (not captured once at
   *    attach time) so file switches within the same pane are handled correctly.
   *  - We watch for attribute mutations too (subtree:true, attributes:true) so
   *    we catch the moment Obsidian stamps `is-unresolved` onto an embed it
   *    couldn't resolve — that's our reliable trigger.
   *  - We use setTimeout(0) inside the callback so Obsidian fully finishes its
   *    own (failed) async resolution before we replace the content; without
   *    this Obsidian can overwrite what we render.
   */
  private attachLeafObserver(leaf: WorkspaceLeaf) {
    const leafId = (leaf as unknown as { id: string }).id;
    if (!leafId || this.leafObservers.has(leafId)) return;

    const container = leaf.view?.containerEl;
    if (!container) return;

    const observer = new MutationObserver(() => {
      // Get source path fresh each time — handles file switches in the same pane.
      const sourcePath = this.getLeafSourcePath(leaf);
      if (!sourcePath) return;
      // Yield so Obsidian finishes stamping is-unresolved / writing error text.
      setTimeout(() => this.resolveEmbedsInEl(container, sourcePath), 0);
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "src", "data-href"],
    });
    this.leafObservers.set(leafId, observer);

    // Scan whatever is already rendered right now (e.g. plugin loaded mid-session).
    const sourcePath = this.getLeafSourcePath(leaf);
    if (sourcePath) {
      setTimeout(() => this.resolveEmbedsInEl(container, sourcePath), 0);
    }
  }

  /** Return the file path of the note open in `leaf`, or null. */
  private getLeafSourcePath(leaf: WorkspaceLeaf): string | null {
    const view = leaf.view as unknown as { file?: TFile };
    return view?.file?.path ?? null;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // EMBED RESOLUTION
  // ══════════════════════════════════════════════════════════════════════════

  // ── Reading mode entry point ─────────────────────────────────────────────

  private async resolveMergeTableEmbeds(
    el: HTMLElement,
    sourcePath: string
  ) {
    const embeds = Array.from(
      el.querySelectorAll<HTMLElement>(".internal-embed")
    );
    for (const embed of embeds) {
      await this.resolveOneEmbed(embed, sourcePath);
    }
  }

  // ── Live Preview entry point (called by MutationObserver) ─────────────────

  /**
   * Scan `el` and its subtree for internal-embed elements that:
   *   (a) reference a block ID (src contains "#^"), AND
   *   (b) are unresolved — Obsidian stamps `is-unresolved` when MetadataCache
   *       lookup fails, which is always the case for merge-table content.
   *
   * We also catch embeds without `is-unresolved` in case the class timing
   * differs between Obsidian versions.
   *
   * `data-merge-resolved` guards against double-processing across observer
   * callbacks.
   */
  private resolveEmbedsInEl(el: HTMLElement, sourcePath: string) {
    // Drop the `span` prefix — LP embeds can be div or span depending on context.
    // Match on is-unresolved OR on #^ alone (belt-and-suspenders).
    const selectors = [
      ".internal-embed.is-unresolved",
      ".internal-embed[src*='#^']",
      ".internal-embed[data-href*='#^']",
    ];
    const seen = new Set<HTMLElement>();
    const embeds: HTMLElement[] = [];

    for (const sel of selectors) {
      el.querySelectorAll<HTMLElement>(sel).forEach((node) => {
        if (!seen.has(node)) { seen.add(node); embeds.push(node); }
      });
      if (el.matches(sel) && !seen.has(el)) { seen.add(el); embeds.push(el); }
    }

    for (const embed of embeds) {
      // Only act on block-ID references we haven't already handled.
      const src = embed.getAttribute("src") ?? embed.getAttribute("data-href") ?? "";
      if (!src.includes("#^")) continue;
      if (embed.getAttribute("data-merge-resolved") === "done") continue;

      embed.setAttribute("data-merge-resolved", "pending");
      this.resolveOneEmbed(embed, sourcePath)
        .then(() => embed.setAttribute("data-merge-resolved", "done"))
        .catch(() => embed.removeAttribute("data-merge-resolved"));
    }
  }

  // ── Shared per-embed resolver ─────────────────────────────────────────────

  /**
   * Resolve a single internal-embed element.
   * Reads the referenced file, finds the block in any merge-table block,
   * and re-renders the embed content if a match is found.
   */
  private async resolveOneEmbed(embed: HTMLElement, sourcePath: string) {
    const src =
      embed.getAttribute("src") ??
      embed.getAttribute("data-href") ??
      embed.getAttribute("alt") ??
      "";

    if (!src.includes("#^")) return;

    const caretIdx = src.indexOf("#^");
    const filePart = src.slice(0, caretIdx);
    const blockId  = src.slice(caretIdx + 2);

    if (!blockId) return;

    const targetFile = this.app.metadataCache.getFirstLinkpathDest(
      filePart,
      sourcePath
    ) as TFile | null;

    if (!targetFile) return;

    let fileContent: string;
    try {
      fileContent = await this.app.vault.cachedRead(targetFile);
    } catch {
      return;
    }

    const blockMarkdown = this.extractBlockFromMergeTables(fileContent, blockId);
    if (blockMarkdown == null) return;

    // Found — render into the embed element, replacing whatever Obsidian put there.
    embed.empty();
    embed.removeAttribute("class");
    embed.addClass("internal-embed", "merge-table-embed");

    const inner   = embed.createDiv({ cls: "markdown-embed" });
    const content = inner.createDiv({ cls: "markdown-embed-content" });
    const page    = content.createDiv({ cls: "markdown-preview-view" });

    await this.renderMarkdownSimple(blockMarkdown, page, targetFile.path);
  }

  // ─── Extract a ^blockid from the merge-table blocks in a raw file ──────────

  /**
   * Parse all merge-table code blocks in `fileContent` and return the markdown
   * content of the block annotated with `^blockId`.
   *
   * Returns null if no matching block is found.
   */
  private extractBlockFromMergeTables(
    fileContent: string,
    blockId: string
  ): string | null {
    // Match all ```merge-table … ``` fences (non-greedy, multiline)
    const fenceRe = /^```merge-table\r?\n([\s\S]*?)^```/gm;
    let fenceMatch: RegExpExecArray | null;

    while ((fenceMatch = fenceRe.exec(fileContent)) !== null) {
      const json = fenceMatch[1];
      let tableDef: TableDef;
      try {
        tableDef = JSON.parse(json) as TableDef;
      } catch {
        continue;
      }

      if (!Array.isArray(tableDef.rows)) continue;

      const result = this.findBlockIdInTableDef(tableDef, blockId);
      if (result != null) return result;
    }

    return null;
  }

  /**
   * Recursively walk a TableDef looking for a string block that contains
   * `^blockId`.  Returns the markdown of the specific annotated block
   * (stripping the ^id marker itself), or null if not found.
   */
  private findBlockIdInTableDef(
    tableDef: TableDef,
    blockId: string
  ): string | null {
    for (const row of tableDef.rows) {
      for (const cell of row) {
        if (cell === null) continue;

        if (typeof cell === "string") {
          const extracted = this.extractAnnotatedBlock(cell, blockId);
          if (extracted != null) return extracted;
          continue;
        }

        if (cell.content != null) {
          const blocks = this.normaliseContent(cell.content);
          for (const block of blocks) {
            if (typeof block === "string") {
              const extracted = this.extractAnnotatedBlock(block, blockId);
              if (extracted != null) return extracted;
            } else {
              // Nested table — recurse
              const nested = this.findBlockIdInTableDef(block, blockId);
              if (nested != null) return nested;
            }
          }
        }
      }
    }
    return null;
  }

  /**
   * Given a markdown string `content`, extract the specific block annotated
   * with `^blockId`.
   *
   * Obsidian associates a `^id` with the block immediately preceding it.
   * We approximate that by finding the segment between the previous blank line
   * (or string start) and the line containing `^id`.
   *
   * Returns the block text without the `^id` marker, or null if not found.
   */
  private extractAnnotatedBlock(
    content: string,
    blockId: string
  ): string | null {
    const idPattern = new RegExp(`(?:^|\\n)\\^${blockId}(?:\\s|$)`);
    const idMatch = idPattern.exec(content);
    if (!idMatch) return null;

    // Position of the `^id` line within the string
    const idLineStart = idMatch.index === 0 ? 0 : idMatch.index + 1;
    const idLineEnd   = content.indexOf("\n", idLineStart);
    const afterId     = idLineEnd >= 0 ? idLineEnd + 1 : content.length;

    // Find the start of the block: the character after the last blank line
    // (double newline) before the ^id
    const beforeId    = content.slice(0, idLineStart);
    const lastBlank   = beforeId.lastIndexOf("\n\n");
    const blockStart  = lastBlank >= 0 ? lastBlank + 2 : 0;

    // The block is everything from blockStart up to (not including) the ^id line.
    // Obsidian's ^blockid always annotates the PRECEDING block — never content after.
    const blockText = content.slice(blockStart, idLineStart).trimEnd();
    return blockText.length > 0 ? blockText : null;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // TABLE RENDERING
  // ══════════════════════════════════════════════════════════════════════════

  private getDepthFromDOM(el: HTMLElement): number {
    let node: HTMLElement | null = el.parentElement;
    while (node) {
      if (node.classList.contains("merge-table-wrapper")) {
        return parseInt(node.getAttribute(DEPTH_ATTR) ?? "0", 10) + 1;
      }
      node = node.parentElement;
    }
    return 0;
  }

  private async handleCodeBlock(
    source: string,
    el: HTMLElement,
    ctx: MarkdownPostProcessorContext,
    depth: number
  ) {
    if (depth > MAX_DEPTH) {
      this.renderError(el, "Max nesting depth exceeded",
        `Tables can be nested up to ${MAX_DEPTH} levels deep.`, source);
      return;
    }
    let tableDef: TableDef;
    try {
      tableDef = JSON.parse(source.trim()) as TableDef;
    } catch (err) {
      this.renderError(el, "Invalid JSON", String(err), source);
      return;
    }
    if (!Array.isArray(tableDef.rows)) {
      this.renderError(el, "Missing `rows` array",
        'The table definition must have a "rows" key.', source);
      return;
    }
    try {
      await this.renderTable(tableDef, el, ctx, depth);
    } catch (err) {
      this.renderError(el, "Render error", String(err), source);
    }
  }

  private async renderTable(
    tableDef: TableDef,
    el: HTMLElement,
    ctx: MarkdownPostProcessorContext,
    depth: number
  ) {
    const wrapper = el.createDiv({ cls: "merge-table-wrapper" });
    wrapper.setAttribute(DEPTH_ATTR, String(depth));
    wrapper.addClass(`merge-table-depth-${depth}`);

    const table = wrapper.createEl("table", { cls: "merge-table" });
    if (tableDef.tableStyle) table.setAttribute("style", tableDef.tableStyle);

    if (tableDef.caption) {
      const captionEl = table.createEl("caption", { cls: "merge-table-caption" });
      await this.renderMarkdown(tableDef.caption, captionEl, ctx, wrapper);
    }

    const tbody = table.createEl("tbody");
    const occupiedGrid = new Map<string, boolean>();
    const key = (r: number, c: number) => `${r},${c}`;
    const isOccupied  = (r: number, c: number) => occupiedGrid.get(key(r, c)) === true;
    const markOccupied = (r: number, c: number) => occupiedGrid.set(key(r, c), true);

    for (let rowIdx = 0; rowIdx < tableDef.rows.length; rowIdx++) {
      const tr = tbody.createEl("tr");
      const rowDef = tableDef.rows[rowIdx];
      let defIdx = 0, gridCol = 0;

      while (defIdx < rowDef.length) {
        while (isOccupied(rowIdx, gridCol)) gridCol++;
        const cellValue = rowDef[defIdx++];
        if (cellValue === null) { gridCol++; continue; }

        const cell: CellDef =
          typeof cellValue === "string" ? { content: cellValue } : cellValue;

        const colspan = Math.max(1, cell.colspan ?? 1);
        const rowspan = Math.max(1, cell.rowspan ?? 1);

        const tag: keyof HTMLElementTagNameMap = cell.header ? "th" : "td";
        const td = tr.createEl(tag, { cls: "merge-table-cell" }) as HTMLTableCellElement;
        if (colspan > 1) td.colSpan = colspan;
        if (rowspan > 1) td.rowSpan = rowspan;

        for (let dr = 0; dr < rowspan; dr++)
          for (let dc = 0; dc < colspan; dc++)
            if (dr !== 0 || dc !== 0) markOccupied(rowIdx + dr, gridCol + dc);

        const styles: string[] = [];
        if (cell.bg)     { const c = this.validateColor(cell.bg);    if (c) styles.push(`background-color: ${c}`); }
        if (cell.color)  { const c = this.validateColor(cell.color); if (c) styles.push(`color: ${c}`); }
        if (cell.align)  styles.push(`text-align: ${cell.align}`);
        if (cell.valign) styles.push(`vertical-align: ${cell.valign}`);
        if (styles.length) td.setAttribute("style", styles.join("; "));

        if (cell.content != null) {
          for (const block of this.normaliseContent(cell.content)) {
            await this.renderBlock(block, td, ctx, depth, wrapper);
          }
        }
        gridCol += colspan;
      }
    }
  }

  private normaliseContent(value: ContentValue): (string | TableDef)[] {
    if (typeof value === "string") return [value];
    if (Array.isArray(value))     return value;
    return [value];
  }

  private async renderBlock(
    block: string | TableDef,
    parent: HTMLElement,
    ctx: MarkdownPostProcessorContext,
    depth: number,
    anchorRoot: HTMLElement
  ) {
    if (typeof block === "string") {
      if (!block.length) return;
      const div = parent.createDiv({ cls: "merge-table-cell-content" });
      await this.renderMarkdown(block, div, ctx, anchorRoot);
    } else {
      if (depth >= MAX_DEPTH) {
        this.renderError(parent, "Max nesting depth exceeded",
          `Tables can be nested up to ${MAX_DEPTH} levels deep.`, "");
        return;
      }
      if (!Array.isArray((block as TableDef).rows)) {
        this.renderError(parent, "Invalid nested table",
          'Each table block must have a "rows" array.', "");
        return;
      }
      await this.renderTable(
        block as TableDef,
        parent.createDiv({ cls: "merge-table-cell-content" }),
        ctx,
        depth + 1
      );
    }
  }

  // ── Markdown rendering + anchor hoisting ────────────────────────────────

  private async renderMarkdown(
    markdown: string,
    el: HTMLElement,
    ctx: MarkdownPostProcessorContext,
    anchorRoot: HTMLElement
  ) {
    if (typeof (MarkdownRenderer as unknown as Record<string, unknown>)["render"] === "function") {
      await (MarkdownRenderer as unknown as {
        render: (app: App, markdown: string, el: HTMLElement,
                 sourcePath: string, component: Component) => Promise<void>;
      }).render(this.app, markdown, el, ctx.sourcePath, this);
    } else {
      await MarkdownRenderer.renderMarkdown(
        markdown, el, ctx.sourcePath, this as Component
      );
    }

    // Hoist any id-bearing elements (set by Obsidian's ^blockid handling)
    // to the outermost wrapper so they're findable at the wrapper level.
    el.querySelectorAll("[id]").forEach((node) => {
      const id = node.getAttribute("id");
      if (id) this.hoistBlockAnchor(id, node as HTMLElement, anchorRoot);
    });
  }

  /** Render markdown without a MarkdownPostProcessorContext (used for embeds). */
  private async renderMarkdownSimple(
    markdown: string,
    el: HTMLElement,
    sourcePath: string
  ) {
    if (typeof (MarkdownRenderer as unknown as Record<string, unknown>)["render"] === "function") {
      await (MarkdownRenderer as unknown as {
        render: (app: App, markdown: string, el: HTMLElement,
                 sourcePath: string, component: Component) => Promise<void>;
      }).render(this.app, markdown, el, sourcePath, this);
    } else {
      await MarkdownRenderer.renderMarkdown(
        markdown, el, sourcePath, this as Component
      );
    }
  }

  private hoistBlockAnchor(
    blockId: string,
    sourceEl: HTMLElement,
    anchorRoot: HTMLElement
  ) {
    const escapedId = CSS.escape(blockId);
    if (anchorRoot.querySelector(`span.merge-table-anchor[id="${escapedId}"]`)) return;

    const anchor = anchorRoot.createEl("span", { cls: "merge-table-anchor" });
    anchor.id = blockId;

    const ghost = anchorRoot.createDiv({ cls: "merge-table-anchor-ghost" });
    ghost.innerHTML = sourceEl.outerHTML;
  }

  // ── Colour validation ────────────────────────────────────────────────────

  private validateColor(raw: string): string | null {
    const s = raw.trim();
    if (/^#([0-9a-fA-F]{3,8})$/.test(s)) return s;
    if (/^(rgb|rgba|hsl|hsla)\s*\([^)]*\)$/i.test(s)) return s;
    if (/^[a-zA-Z]{2,30}$/.test(s)) return s;
    return null;
  }

  // ── Error display ────────────────────────────────────────────────────────

  private renderError(el: HTMLElement, title: string, message: string, source: string) {
    const div = el.createDiv({ cls: "merge-table-error" });
    div.createEl("strong", { text: `⚠ Merge Table – ${title}: ` });
    div.createSpan({ text: message });
    if (source) {
      const pre = div.createEl("pre", { cls: "merge-table-error-source" });
      pre.createEl("code", { text: source });
    }
  }
}
