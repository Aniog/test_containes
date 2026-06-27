import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const rootEl = document.getElementById("root");

if (rootEl && rootEl.children.length > 0) {
  // Static content already present — hydrate
  ReactDOM.hydrateRoot(
    rootEl,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
