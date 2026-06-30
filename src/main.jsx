import React from "react";
import ReactDOM from "react-dom/client";
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

// Preview route bridge
if (typeof window !== 'undefined') {
  window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
    // This will be set by React Router after mount
  };
}
