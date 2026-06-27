import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const rootEl = document.getElementById("root");

// If the server rendered static HTML into the root (SSR), hydrate instead of
// fully re-rendering so the page keeps all of its pre-hydrate DOM and any
// progressive-enhancement scripts can wire up afterwards. Otherwise, do a
// client-only render.
if (rootEl && rootEl.hasChildNodes()) {
  hydrateRoot(
    rootEl,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}