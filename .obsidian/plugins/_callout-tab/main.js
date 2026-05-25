'use strict';

const { Plugin } = require('obsidian');

// ─── Styles ────────────────────────────────────────────────────────────────
const STYLE_ID = 'obsidian-tabs-plugin-styles';

const CSS = `
/* ── Tabs container ── */
.tabs-plugin-container {
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  overflow: hidden;
  margin: 0.5em 0 1em;
  background: var(--background-primary);
}

/* ── Tab strip ── */
.tabs-plugin-header {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--background-modifier-border);
  background: var(--background-secondary);
}

/* ── Individual tab button ── */
.tabs-plugin-btn {
  position: relative;
  padding: 8px 18px;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  cursor: pointer;
  user-select: none;
  border-right: 1px solid var(--background-modifier-border);
  transition: color 0.15s, background 0.15s;
  white-space: nowrap;
  background: transparent;
}

.tabs-plugin-btn:last-child {
  border-right: none;
}

.tabs-plugin-btn:hover {
  color: var(--text-normal);
  background: var(--background-modifier-hover);
}

/* Active tab lifts out of the strip */
.tabs-plugin-btn.is-active {
  color: var(--text-normal);
  background: var(--background-primary);
  box-shadow: inset 0 -1px 0 var(--background-primary);
  margin-bottom: -1px;
  padding-bottom: 9px;
}

/* ── Content panels ── */
.tabs-plugin-content {
  background: var(--background-primary);
}

.tabs-plugin-panel {
  display: none;
  padding: 14px 18px;
}

.tabs-plugin-panel.is-active {
  display: block;
}

.tabs-plugin-panel p:first-child { margin-top: 0; }
.tabs-plugin-panel p:last-child  { margin-bottom: 0; }
`;

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Returns the tab name if `el` is a separator paragraph (text starts with
 * "=== "), otherwise null.
 *
 * Handles two forms:
 *   <p>=== Tab Name</p>                 — blank line before content
 *   <p>=== Tab Name<br>first content…   — no blank line; content is split off
 *     The <br> and everything after it is detached and returned in `overflow`.
 */
function parseSeparator(el) {
  if (el.tagName !== 'P') return null;

  // If the paragraph starts with a <br> or the very first text node doesn't
  // begin with "=== ", it is not a separator.
  const firstText = el.childNodes[0];
  if (!firstText || firstText.nodeType !== Node.TEXT_NODE) return null;

  const raw = firstText.textContent;
  if (!raw.trimStart().startsWith('=== ')) return null;

  const name = raw.trimStart().slice(4).trim();

  // Collect any nodes after the first <br> as overflow content that belongs
  // to the tab body (happens when user didn't put a blank line after ===).
  const overflow = [];
  let foundBr = false;
  for (const child of Array.from(el.childNodes)) {
    if (!foundBr && child === firstText) continue;
    if (!foundBr && child.nodeName === 'BR') { foundBr = true; continue; }
    if (foundBr) overflow.push(child);
  }

  return { name, overflow };
}

// ─── Plugin ────────────────────────────────────────────────────────────────
class TabsPlugin extends Plugin {

  onload() {
    this.injectStyles();

    // Priority 0 = after Obsidian's own callout processor has run.
    this.registerMarkdownPostProcessor((el, ctx) => {
      el.querySelectorAll('.callout[data-callout="tabs"]').forEach(callout => {
        this.transformCallout(callout);
      });
    }, 0);
  }

  onunload() {
    document.getElementById(STYLE_ID)?.remove();
  }

  // ── Style injection ────────────────────────────────────────────────────
  injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const tag = document.createElement('style');
    tag.id   = STYLE_ID;
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }

  // ── Transform a single callout into the tabs widget ───────────────────
  transformCallout(callout) {
    const contentEl = callout.querySelector('.callout-content');
    if (!contentEl) return;

    // Walk all direct children and split into named groups at === markers.
    const groups = [];   // [{ name, nodes[] }]
    let current  = null;

    for (const child of Array.from(contentEl.childNodes)) {
      // Only element nodes can be separators; skip bare text/whitespace nodes.
      if (child.nodeType !== Node.ELEMENT_NODE) {
        if (current) current.nodes.push(child);
        continue;
      }

      const sep = parseSeparator(child);
      if (sep) {
        // Start a new tab group.
        current = { name: sep.name, nodes: [] };
        groups.push(current);

        // If there was inline content after the === on the same line,
        // wrap it in a <p> and add it as the first node of this tab.
        if (sep.overflow.length > 0) {
          const p = document.createElement('p');
          sep.overflow.forEach(n => p.appendChild(n));
          current.nodes.push(p);
        }
      } else if (current) {
        current.nodes.push(child);
      }
      // Nodes before the first === are discarded.
    }

    if (groups.length === 0) return;

    // ── Build the tabs widget ──
    const container = document.createElement('div');
    container.className = 'tabs-plugin-container';

    const header  = document.createElement('div');
    header.className = 'tabs-plugin-header';

    const content = document.createElement('div');
    content.className = 'tabs-plugin-content';

    container.appendChild(header);
    container.appendChild(content);

    const btns   = [];
    const panels = [];

    for (const group of groups) {
      // Tab button
      const btn = document.createElement('div');
      btn.className   = 'tabs-plugin-btn';
      btn.textContent = group.name;
      header.appendChild(btn);
      btns.push(btn);

      // Tab panel — move already-rendered nodes directly (no re-render needed)
      const panel = document.createElement('div');
      panel.className = 'tabs-plugin-panel';
      group.nodes.forEach(n => panel.appendChild(n));
      content.appendChild(panel);
      panels.push(panel);

      // Click handler
      btn.addEventListener('click', () => {
        btns.forEach(b   => b.classList.remove('is-active'));
        panels.forEach(p => p.classList.remove('is-active'));
        btn.classList.add('is-active');
        panel.classList.add('is-active');
      });
    }

    // Activate first tab
    btns[0].classList.add('is-active');
    panels[0].classList.add('is-active');

    // Swap the callout for the widget
    callout.replaceWith(container);
  }
}

module.exports = TabsPlugin;
