import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Expose a navigator so the preview bridge in index.html can ask us
// to perform a real SPA navigation. react-router's BrowserRouter
// listens for popstate and re-renders the matching route.
const injectNavigateBridge = () => {
  if (typeof window === "undefined") return;
  if (window.__STRIKINGLY_PREVIEW_NAVIGATE__) return;
  window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
    if (typeof path !== "string" || !path) return;
    const state = window.history.state || {};
    if (options.replace) {
      window.history.replaceState(state, "", path);
    } else {
      window.history.pushState(state, "", path);
    }
    window.dispatchEvent(new PopStateEvent("popstate", { state }));
  };
};

injectNavigateBridge();

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
