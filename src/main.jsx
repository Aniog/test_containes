import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// Use hydrateRoot to hydrate the prerendered HTML instead of replacing it
const rootEl = document.getElementById("root");
if (rootEl && rootEl.childNodes.length > 0) {
  // Content exists from prerender - hydrate it
  ReactDOM.hydrateRoot(rootEl, <App />);
} else {
  // No prerendered content - fall back to client render
  ReactDOM.createRoot(rootEl).render(<App />);
}
