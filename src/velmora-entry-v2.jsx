import React from "react";
import ReactDOM from "react-dom/client";
import App from "./velmora/StorefrontApp.jsx";
import "./velmora-theme-v2.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
