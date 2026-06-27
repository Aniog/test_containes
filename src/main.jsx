import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// Use hydrateRoot if the root already has SSR content, otherwise createRoot
const rootEl = document.getElementById("root");
const hasSsrContent = rootEl && rootEl.childNodes.length > 0;

if (hasSsrContent) {
  ReactDOM.hydrateRoot(rootEl, <App />);
} else {
  ReactDOM.createRoot(rootEl).render(<App />);
}
