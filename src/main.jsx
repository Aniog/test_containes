import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// Mount React into a dedicated container so the static loading indicator
// (#strk-loading) inside #root persists as a sibling, preventing false
// "blank page" detections by the preview health check system.
const mountEl = document.getElementById("strk-mount") || document.getElementById("root");

ReactDOM.createRoot(mountEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
