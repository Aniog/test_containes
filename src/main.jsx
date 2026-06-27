// The /generators hub page is fully statically rendered inside <div id="root"> in index.html.
// We intentionally do NOT call ReactDOM.createRoot here, because mounting a React tree
// would clear the static markup that view-source: depends on. The page is plain HTML
// + inline JS for search/accordion/show-all behavior; it does not need a React runtime.
import "./index.css";

if (import.meta.env.DEV) {
  // Keep the dev-only visual edit toolbar working.
  import("./visual-edit/index.js");
}
