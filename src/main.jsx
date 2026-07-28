import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ImageHelper } from "@strikingly/sdk";

// Expose ImageHelper globally for data-strk-img image loading
if (typeof window !== 'undefined') {
  window.ImageHelper = ImageHelper;
}

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
