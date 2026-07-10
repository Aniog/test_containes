import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// Expose the router navigate function for the preview-route bridge
// defined in index.html. We register it lazily after the router mounts.
function registerPreviewBridge() {
  if (typeof window === "undefined") return;
  if (window.__STRIKINGLY_PREVIEW_NAVIGATE__) return;

  // The function is set up by App's router via a side-effect; the actual
  // implementation lives inside the App tree. If unavailable, fall back to
  // history API usage.
  window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
    if (typeof path !== "string" || !path) return;
    if (options.replace) {
      window.history.replaceState({}, "", path);
    } else {
      window.history.pushState({}, "", path);
    }
    window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
  };
}

registerPreviewBridge();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
