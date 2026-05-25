var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ExcerptPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var STYLE_ID = "excerpt-plugin-styles";
var STYLES = `
/* \u2500\u2500 Excerpt Plugin (transparent) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.excerpt-transparent {
  display: contents;
}
/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
`;
function injectStyles() {
  let el = document.getElementById(STYLE_ID);
  if (!el) {
    el = document.createElement("style");
    el.id = STYLE_ID;
    document.head.appendChild(el);
  }
  el.textContent = STYLES;
}
var ExcerptPlugin = class extends import_obsidian.Plugin {
  async onload() {
    injectStyles();
    this.registerMarkdownCodeBlockProcessor(
      "excerpt",
      async (source, el, ctx) => {
        const body = el.createDiv({ cls: "excerpt-transparent" });
        const child = new import_obsidian.MarkdownRenderChild(body);
        ctx.addChild(child);
        await import_obsidian.MarkdownRenderer.render(
          this.app,
          source,
          body,
          ctx.sourcePath,
          child
        );
      }
    );
    console.log("Excerpt Plugin loaded");
  }
  onunload() {
    document.getElementById(STYLE_ID)?.remove();
    console.log("Excerpt Plugin unloaded");
  }
};
