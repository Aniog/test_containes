import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// If SSR content exists in the root element, skip React hydration entirely.
// The SSR HTML + vanilla JS client already provides full functionality
// (search, show-all toggles, FAQ accordion). React hydration would conflict
// with the vanilla JS event listeners and is unnecessary for this page.
const rootEl = document.getElementById("root");
if (rootEl.childElementCount === 0) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
