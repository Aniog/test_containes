import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Visual-edit (dev only) — passive until parent enables it.
if (import.meta.env.DEV) {
  import("./visual-edit/index.js").catch((err) => {
    // eslint-disable-next-line no-console
    console.error("[visual-edit] failed to load:", err);
  });
}

const root = document.getElementById("root");
// Always use createRoot; we render fresh on the client. SSR is only used by
// the dev preview to populate initial HTML for crawlers. The dev preview
// still re-renders everything client-side so onClick / onChange work.
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);