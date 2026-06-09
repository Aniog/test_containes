import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const rootElement = document.getElementById("root");

// Use hydrateRoot when server-rendered HTML is present (SSR)
// Fall back to createRoot when no server-rendered content exists
if (rootElement.innerHTML.trim().length > 0) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
