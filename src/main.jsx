import React from "react";
import ReactDOM from "react-dom/client";
import { ImageHelper } from "@strikingly/sdk";
import App from "./App.jsx";
import "./index.css";
import strkImgConfig from "./strk-img-config.json";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

requestAnimationFrame(() => {
  ImageHelper.loadImages(strkImgConfig, document.body);
});
