import { Plugin, MarkdownRenderer, MarkdownPostProcessorContext, Component } from "obsidian";

export default class ExpandPlugin extends Plugin {
	async onload() {
		console.log("Loading Expand Plugin");

		// Transparent inline variant — ```expand TITLE
		this.registerMarkdownCodeBlockProcessor(
			"expand",
			async (source, el, ctx) => {
				await this.renderBlock(source, el, ctx, "expand");
			}
		);

		// Bordered UI-block variant — ```expand-ui TITLE
		this.registerMarkdownCodeBlockProcessor(
			"expand-ui",
			async (source, el, ctx) => {
				await this.renderBlock(source, el, ctx, "expand-ui");
			}
		);
	}

	async renderBlock(
		source: string,
		el: HTMLElement,
		ctx: MarkdownPostProcessorContext,
		tag: "expand" | "expand-ui"
	) {
		// Extract title from the opening fence line
		const sectionInfo = ctx.getSectionInfo(el);
		let title = "Details";

		if (sectionInfo) {
			const lines = sectionInfo.text.split("\n");
			const openingLine = lines[sectionInfo.lineStart];
			// Match either ```expand or ```expand-ui followed by optional title
			const match = openingLine.match(/^(?:```|~~~)\s*expand(?:-ui)?\s+(.*)/i);
			if (match && match[1].trim()) {
				title = match[1].trim();
			}
		}

		if (tag === "expand") {
			// ── Transparent inline variant ──────────────────────────────────
			el.addClass("expand-host");
			const pre = el.closest("pre");
			if (pre) pre.addClass("expand-pre-reset");

			const wrapper = el.createEl("div", { cls: "expand-block" });
			const summary = wrapper.createEl("div", { cls: "expand-summary" });
			const chevron = summary.createEl("span", { cls: "expand-chevron" });
			chevron.innerHTML = chevronSVG(12);
			summary.createEl("span", { cls: "expand-title", text: title });

			const content = wrapper.createEl("div", { cls: "expand-content" });
			content.style.display = "none";

			await renderMarkdown(this.app, source, content, ctx.sourcePath);

			let isOpen = false;
			summary.addEventListener("click", () => {
				isOpen = !isOpen;
				content.style.display = isOpen ? "block" : "none";
				wrapper.toggleClass("expand-open", isOpen);
			});

		} else {
			// ── Bordered UI-block variant ────────────────────────────────────
			const wrapper = el.createEl("div", { cls: "expand-ui-block" });
			const summary = wrapper.createEl("div", { cls: "expand-ui-summary" });
			const chevron = summary.createEl("span", { cls: "expand-ui-chevron" });
			chevron.innerHTML = chevronSVG(14);
			summary.createEl("span", { cls: "expand-ui-title", text: title });

			const content = wrapper.createEl("div", { cls: "expand-ui-content" });
			content.style.display = "none";

			await renderMarkdown(this.app, source, content, ctx.sourcePath);

			let isOpen = false;
			summary.addEventListener("click", () => {
				isOpen = !isOpen;
				content.style.display = isOpen ? "block" : "none";
				wrapper.toggleClass("expand-ui-open", isOpen);
			});
		}
	}

	onunload() {
		console.log("Unloading Expand Plugin");
	}
}

function chevronSVG(size: number): string {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
}

async function renderMarkdown(app: any, source: string, el: HTMLElement, sourcePath: string) {
	const component = new Component();
	component.load();
	await MarkdownRenderer.render(app, source, el, sourcePath, component);
}
