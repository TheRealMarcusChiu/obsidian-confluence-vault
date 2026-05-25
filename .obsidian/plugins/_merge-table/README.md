# Merge Table — Obsidian Plugin

Create rich tables directly in your Obsidian notes with:

- **Merged cells** — `colspan` and `rowspan`, just like HTML tables
- **Colour highlights** — per-cell background and foreground colours in `#hex`, `rgb()`, or any CSS colour
- **Full Markdown rendering** — every cell renders bold, italic, code blocks, lists, links, callouts, etc.
- **Nested tables** — embed tables inside any cell, to any depth (up to 8 levels)
- **Mixed cell content** — interleave Markdown text and nested tables in any order within a single cell

---

## Installation

### From the community plugin store (recommended)

1. Open **Settings → Community plugins → Browse**
2. Search for **Merge Table**
3. Click **Install**, then **Enable**

### Manual installation

1. Copy `main.js`, `manifest.json`, and `styles.css` into
   `<your vault>/.obsidian/plugins/merge-table/`
2. Reload Obsidian (Ctrl/Cmd + R)
3. Go to **Settings → Community plugins**, find **Merge Table**, and enable it

### Building from source

```bash
# Prerequisites: Node.js ≥ 16
npm install
npm run build
# Output: main.js  (copy together with manifest.json and styles.css)
```

---

## Usage

Wrap your table definition in a ` ```merge-table ` fenced code block containing a single JSON object.

````markdown
```merge-table
{
  "rows": [
    [ ... ],
    [ ... ]
  ]
}
```
````

### Row entries

Each entry in a row can be:

| Type | Meaning |
|------|---------|
| `"string"` | Shorthand cell — equivalent to `{ "content": "…" }` |
| `{ … }` | Full cell object (see reference below) |
| `null` | Placeholder for a position covered by a neighbouring colspan or rowspan |

---

## Cell object reference

### Layout keys

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `content` | see below | — | What to render inside the cell |
| `colspan` | `number` | `1` | Span across N columns |
| `rowspan` | `number` | `1` | Span across N rows |
| `header` | `boolean` | `false` | Render as `<th>` (bold, centred by default) |

### Style keys

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `bg` | `string` | — | Background colour |
| `color` | `string` | — | Text / foreground colour |
| `align` | `"left"` \| `"center"` \| `"right"` | inherited | Horizontal text alignment |
| `valign` | `"top"` \| `"middle"` \| `"bottom"` | `"top"` | Vertical text alignment |

---

## The `content` key

`content` is the single key for everything rendered inside a cell. Its **type** determines what it does:

| Value type | What renders |
|------------|-------------|
| `"a string"` | Markdown — bold, italic, code blocks, lists, links, etc. |
| `{ "rows": [...] }` | A nested merge-table |
| `["string or table", ...]` | Each entry rendered top-to-bottom in order |

### String — Markdown

```json
{ "content": "Some **bold** text with a `code span`." }
```

Code blocks work too — use `\n` for newlines, backticks need no escaping:

```json
{ "content": "```js\nconst x = 42;\nconsole.log(x);\n```" }
```

Always separate a code fence from surrounding prose with a blank line (`\n\n`):

```json
{ "content": "Intro.\n\n```js\ncode here\n```\n\nMore text." }
```

### Object — nested table

```json
{
  "content": {
    "rows": [
      [ { "content": "**A**", "header": true }, { "content": "**B**", "header": true } ],
      [ "one", "two" ]
    ]
  }
}
```

### Array — interleaved Markdown and tables

Each entry is either a Markdown string or a table object, rendered in order:

```json
{
  "content": [
    "**Intro** text above the first table.",
    { "rows": [["A", "B"], ["1", "2"]] },
    "Text between the two tables.\n\n```js\nconst x = 1;\n```",
    { "rows": [["C", "D"], ["3", "4"]] },
    "> A trailing note."
  ]
}
```

---

## Colour formats

Any of the following are accepted for `bg` and `color`:

```
"#f90"                  shorthand hex
"#ff9900"               full hex
"#ff990080"             hex with alpha
"rgb(255,153,0)"        RGB
"rgba(255,153,0,0.5)"   RGBA
"hsl(36,100%,50%)"      HSL
"cornsilk"              CSS named colour
```

---

## Spanning cells — the grid model

The plugin uses the same model as HTML tables:

- A cell with `"colspan": 3` occupies three consecutive columns.
- A cell with `"rowspan": 2` occupies the same column position in the **next** row too.
- Positions covered by a rowspan from above are **automatically skipped** — no `null` needed, though you may add one for readability.
- Positions covered by a colspan in the **same** row need an explicit `null` if you want the JSON to stay visually aligned.

---

## Nesting

Nested tables work at any depth because `content` accepts a `TableDef` object directly — no string escaping involved, so code blocks inside nested cells work exactly as they do at the top level.

The plugin tracks nesting depth via the DOM and refuses to recurse past **8 levels**, showing a clear error message if exceeded. In practice, 3–4 levels is the readable limit.

Each depth level gets a coloured outline automatically so the hierarchy is immediately visible:

| Depth | Outline colour |
|-------|---------------|
| 0 (top level) | none |
| 1 | accent (purple by default) |
| 2 | green |
| 3 | orange |
| 4+ | red |

Colours use Obsidian CSS variables and adapt to dark mode and custom themes automatically.

---

## Examples

### 1 — Simple colour table

````markdown
```merge-table
{
  "rows": [
    [
      { "content": "**Status**", "header": true },
      { "content": "**Task**",   "header": true },
      { "content": "**Owner**",  "header": true }
    ],
    [
      { "content": "✅ Done",         "bg": "#d4edda", "color": "#155724" },
      { "content": "Write docs" },
      "Alice"
    ],
    [
      { "content": "🔄 In progress",  "bg": "#fff3cd", "color": "#856404" },
      { "content": "Review PR" },
      "Bob"
    ],
    [
      { "content": "❌ Blocked",       "bg": "#f8d7da", "color": "#721c24" },
      { "content": "Deploy to prod" },
      "Carol"
    ]
  ]
}
```
````

### 2 — Merged header (colspan)

````markdown
```merge-table
{
  "rows": [
    [
      { "content": "**Q1 2025 Report**", "colspan": 3, "header": true,
        "bg": "#2c3e50", "color": "#ffffff", "align": "center" },
      null, null
    ],
    [
      { "content": "**Month**",   "header": true },
      { "content": "**Revenue**", "header": true },
      { "content": "**Growth**",  "header": true }
    ],
    [ "January",  "$120,000", "+8%"  ],
    [ "February", "$135,000", "+12%" ],
    [ "March",    "$148,000", "+9%"  ]
  ]
}
```
````

### 3 — Vertical merge (rowspan)

````markdown
```merge-table
{
  "rows": [
    [
      { "content": "**Region**", "header": true },
      { "content": "**City**",   "header": true },
      { "content": "**Pop.**",   "header": true }
    ],
    [
      { "content": "**Europe**", "rowspan": 3,
        "bg": "#eaf4fb", "valign": "middle", "align": "center" },
      "London", "9.0M"
    ],
    [ "Paris",  "2.2M" ],
    [ "Berlin", "3.7M" ],
    [
      { "content": "**Asia**", "rowspan": 2,
        "bg": "#eafbea", "valign": "middle", "align": "center" },
      "Tokyo", "14M"
    ],
    [ "Seoul", "9.7M" ]
  ]
}
```
````

### 4 — Markdown features in cells

````markdown
```merge-table
{
  "rows": [
    [
      { "content": "**Feature**", "header": true },
      { "content": "**Example**", "header": true }
    ],
    [ "Bold / italic",  "**bold**, *italic*, ~~strike~~"          ],
    [ "Inline code",    "`const x = 42;`"                         ],
    [ "Code block",     "```js\nfunction hi() {\n  return 1;\n}\n```" ],
    [ "Task list",      "- [x] Done\n- [ ] Pending"               ],
    [ "Blockquote",     "> *A wise quote.*"                        ],
    [ "Link",           "[Obsidian](https://obsidian.md)"          ]
  ]
}
```
````

### 5 — Nested table (content as object)

````markdown
```merge-table
{
  "rows": [
    [
      { "content": "**Quarter**",   "header": true },
      { "content": "**Breakdown**", "header": true }
    ],
    [
      { "content": "**Q1**", "bg": "#eaf4fb", "valign": "middle", "align": "center" },
      {
        "content": {
          "rows": [
            [
              { "content": "**Month**",   "header": true },
              { "content": "**Revenue**", "header": true }
            ],
            [ "January",  "$120k" ],
            [ "February", "$135k" ],
            [ "March",    "$148k" ]
          ]
        }
      }
    ]
  ]
}
```
````

### 6 — Mixed Markdown and tables in one cell (content as array)

````markdown
```merge-table
{
  "rows": [
    [
      {
        "content": [
          "**Fruits**",
          {
            "rows": [
              [ "🍎 Apple",  "Red"    ],
              [ "🍌 Banana", "Yellow" ]
            ]
          },
          "**Veggies**",
          {
            "rows": [
              [ "🥦 Broccoli", "Green"  ],
              [ "🥕 Carrot",   "Orange" ]
            ]
          }
        ]
      }
    ]
  ]
}
```
````

### 7 — Code blocks inside nested cells

````markdown
```merge-table
{
  "rows": [
    [
      { "content": "**Language**", "header": true },
      { "content": "**Snippet**",  "header": true }
    ],
    [
      "JavaScript",
      {
        "content": {
          "rows": [
            [
              { "content": "**Style**", "header": true },
              { "content": "**Code**",  "header": true }
            ],
            [
              "Arrow fn",
              { "content": "```js\nconst greet = name => `Hi, ${name}!`;\n```" }
            ],
            [
              "Async",
              { "content": "```js\nasync function load(url) {\n  return (await fetch(url)).json();\n}\n```" }
            ]
          ]
        }
      }
    ],
    [
      "Python",
      {
        "content": {
          "rows": [
            [
              { "content": "**Style**", "header": true },
              { "content": "**Code**",  "header": true }
            ],
            [
              "Comprehension",
              { "content": "```python\nsquares = [x**2 for x in range(10)]\n```" }
            ],
            [
              "Dataclass",
              { "content": "```python\n@dataclass\nclass Point:\n    x: float\n    y: float\n```" }
            ]
          ]
        }
      }
    ]
  ]
}
```
````

### 8 — Everything together

````markdown
```merge-table
{
  "caption": "## Project Dashboard",
  "rows": [
    [
      { "content": "**Module**",   "header": true, "bg": "#1a1a2e", "color": "#e0e0ff" },
      { "content": "**Status**",   "header": true, "bg": "#1a1a2e", "color": "#e0e0ff" },
      { "content": "**Details**",  "header": true, "bg": "#1a1a2e", "color": "#e0e0ff", "colspan": 2 },
      null
    ],
    [
      { "content": "**Auth**", "rowspan": 2, "valign": "middle", "align": "center", "bg": "#eaf4fb" },
      { "content": "✅ Stable", "bg": "#d4edda", "color": "#155724", "align": "center", "rowspan": 2, "valign": "middle" },
      { "content": "**Endpoints**", "header": true, "colspan": 2, "align": "center" },
      null
    ],
    [
      { "content": "`POST /login`\n`POST /refresh`" },
      { "content": "```js\n{ access: '15m', refresh: '7d' }\n```" }
    ],
    [
      { "content": "**Pipeline**", "align": "center", "bg": "#fff8e1" },
      { "content": "🔄 In Progress", "bg": "#fff3cd", "color": "#856404", "align": "center" },
      {
        "colspan": 2,
        "content": [
          "- [x] Kafka refactor\n- [x] Schema registry\n- [ ] Dead-letter queue",
          {
            "rows": [
              [
                { "content": "**Stage**",   "header": true },
                { "content": "**p99**",     "header": true }
              ],
              [ "Ingest",    "8ms"  ],
              [ "Transform", "14ms" ],
              [ { "content": "Sink ⚠️", "bg": "#ffe0b2" }, { "content": "21ms", "bg": "#ffe0b2" } ]
            ]
          },
          "> Sink latency exceeds 20ms SLA."
        ]
      },
      null
    ],
    [
      { "content": "**ML**", "align": "center", "bg": "#f3e5f5" },
      { "content": "❌ Blocked", "bg": "#f8d7da", "color": "#721c24", "align": "center" },
      { "content": "GPU quota pending.\n\n```python\ndevice = 'cuda' if approved else 'cpu'\n```" },
      {
        "content": {
          "rows": [
            [
              { "content": "**Model**", "header": true },
              { "content": "**Acc.**",  "header": true }
            ],
            [ "ResNet-50",  "91.2%" ],
            [ "DistilBERT", "88.7%" ],
            [ "YOLOv8",     "94.1%" ]
          ]
        }
      }
    ]
  ]
}
```
````

---

## Tips

- **Dark-mode safe** — all default colours use Obsidian CSS variables and adapt to any theme automatically.
- **Colour contrast** — when setting a dark `bg`, also set a light `color` for readability.
- **Null placeholders** — only needed for colspan positions in the *same* row; rowspan positions in later rows are skipped automatically.
- **Newlines in strings** — use `\n` inside JSON strings. Separate a code fence from prose with `\n\n` so the Markdown parser recognises the boundary.
- **tableStyle** — add extra CSS to the outer `<table>` element: `"tableStyle": "width: 600px;"`.
- **content array tip** — build the innermost tables first and work outward; a JSON editor with collapsible nodes makes deep structures much easier to manage.

---

## Changelog

### 2.0.0
- Unified `content`, `blocks`, and `table` into a single `content` key
- `content` accepts a string (Markdown), an object (nested table), or an array (ordered mix of both)
- Simpler mental model — one key, type-driven behaviour

### 1.3.0
- Added `blocks` array — interleave Markdown strings and table objects in any order

### 1.2.0
- Added `table` property — nest a `TableDef` as a plain JSON object; code blocks work at any depth

### 1.1.0
- Recursive nesting via embedded ` ```merge-table ``` ` blocks in `content`
- Depth tracking via DOM; depth-based coloured outlines
- Hard recursion guard at depth 8

### 1.0.0
- Initial release: `colspan`, `rowspan`, per-cell colours, `header` cells, full Markdown rendering, optional `caption`, dark-mode–safe styles

---

## License

MIT — see `LICENSE`.
