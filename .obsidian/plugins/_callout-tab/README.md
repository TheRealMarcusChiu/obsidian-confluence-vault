# Obsidian Tabs Plugin

Render tabbed content using native Obsidian **callout syntax** — no code fences needed. Full Markdown rendering (headings, lists, code blocks, callouts, embeds, LaTeX…) works inside every tab exactly as it would at document level.

---

## Installation

1. Copy the **`obsidian-tabs-plugin`** folder into your vault:
   ```
   <your-vault>/.obsidian/plugins/obsidian-tabs-plugin/
   ```
2. **Settings → Community plugins** → disable Safe mode → enable **Tabs**.

---

## Usage

Write a `[!tabs]` callout. Start each tab with `=== Tab Name` on its own line (blank lines around the separator are recommended so each tab name is its own paragraph):

```markdown
> [!tabs]
>
> === ONE
>
> CONTENT_ONE — any **Markdown** here.
>
> === TWO
>
> ## A heading
> - bullet list
> - another item
>
> === THREE
>
> > [!tip] Callouts work too!
> > Nest whatever you like.
```

### Syntax rules

| Syntax          | Meaning                                      |
|-----------------|----------------------------------------------|
| `> [!tabs]`     | Opens a tabs block                           |
| `> === Tab Name`| Starts a new tab (blank line before/after recommended) |
| Everything else | Markdown content for the current tab         |

- Tab names can contain spaces and emoji.
- All standard Obsidian Markdown renders inside each tab.
- Content before the first `===` is ignored.

---

## How it works

The plugin registers a **Markdown post-processor** that runs after Obsidian renders the callout. It detects `=== Tab Name` separator paragraphs inside `.callout[data-callout="tabs"]`, groups the already-rendered DOM nodes under each tab, and replaces the callout element with the tabs widget — so Obsidian's own renderer handles all Markdown inside each tab with zero extra work.

---

## Compatibility

- Obsidian **0.15.0+** · Desktop & Mobile
