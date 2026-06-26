import React from "react";
import ReactDOM from "react-dom/client";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Global image helper scan
window.requestAnimationFrame(() => {
  ImageHelper.loadImages(strkImgConfig, document.body);
});
