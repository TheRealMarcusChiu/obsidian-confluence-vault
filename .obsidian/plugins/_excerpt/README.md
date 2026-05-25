# Excerpt Plugin for Obsidian

A **Confluence-style excerpt macro** for Obsidian.  
Wrap any markdown — including nested code blocks — in a styled, labelled callout box.

---

## Syntax

````markdown
```excerpt
Your **markdown** content here.

- Bullet lists work
- So do _italics_ and `inline code`

```python
# Code blocks work too!
def hello():
    print("Hello from an excerpt!")
```

> Blockquotes, tables, embeds — all supported.
```
````

---

## Installation

### Method 1 — Manual (recommended for local development)

1. Locate your Obsidian vault folder.
2. Inside it, find (or create) the folder: `.obsidian/plugins/`
3. Copy the **entire `excerpt-plugin` folder** into `.obsidian/plugins/`  
   The folder must contain at least:
   - `main.js`
   - `manifest.json`
4. Open Obsidian → **Settings → Community Plugins**
5. Turn off **Safe Mode** if prompted
6. Find **"Excerpt"** in the list and enable the toggle ✅

### Method 2 — BRAT (Beta Reviewers Auto-update Tool)

If you use BRAT, point it at the repo URL of this plugin.

---

## Settings

Navigate to **Settings → Excerpt** to customise:

| Setting | Default | Description |
|---|---|---|
| Label text | `Excerpt` | Text shown in the header bar |
| Show label | on | Toggle the header bar |
| Show border | on | Toggle the outer border |
| Accent color | `#0052CC` | Color of the left stripe & label |

---

## File structure placed in your vault

```
.obsidian/
└── plugins/
    └── excerpt-plugin/
        ├── main.js        ← compiled plugin (required)
        └── manifest.json  ← plugin metadata (required)
```

---

## How it works

- Registers a **code-fence processor** for the language tag `excerpt`.
- Uses Obsidian's `MarkdownRenderer.render()` so all standard markdown — headings, lists, bold/italic, tables, links, embeds, and nested code blocks with syntax highlighting — renders correctly inside the excerpt.
- Styles are injected once at load and hot-reloaded when you change settings.
- Works in both **Edit (Live Preview)** and **Reading** modes.
