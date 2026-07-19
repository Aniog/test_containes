import React from "react";
import ReactDOM from "react-dom/client";
import { ImageHelper } from "@strikingly/sdk";
import App from "./App.jsx";
import strkImgConfig from "./strk-img-config.json";
import "./index.css?velmora=5";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

window.requestAnimationFrame(() => {
  ImageHelper.loadImages(strkImgConfig, rootElement);
});
