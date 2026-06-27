// The /generators hub page is rendered statically in index.html.
// React is intentionally not mounted on this page to guarantee that
// view-source contains every directory card, every link, every FAQ,
// and every section heading. The brief explicitly approves a single
// self-contained HTML file with inline <style> and <script>.

if (import.meta.env.DEV) {
  // Keep visual-edit available in dev for tooling parity, but it is a no-op
  // if there is no React tree mounted.
  import("./visual-edit/index.js").catch(() => {});
}
