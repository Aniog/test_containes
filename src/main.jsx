import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Expose navigate for preview bridge
if (import.meta.env.DEV) {
  import("react-router-dom").then(({ createBrowserNavigation }) => {
    // Bridge is handled by BrowserRouter internally
  }).catch(() => {});
}

window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
  // This will be set by the BrowserRouter
  // For now, use history API directly
  if (options?.replace) {
    window.history.replaceState({}, "", path);
  } else {
    window.history.pushState({}, "", path);
  }
  window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
};
