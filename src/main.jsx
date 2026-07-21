import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import strkImgConfig from "./strk-img-config.json";
import { ImageHelper } from "@strikingly/sdk";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Initialize stock image system
if (typeof window !== 'undefined' && document.getElementById('root')) {
  try {
    ImageHelper.loadImages(strkImgConfig, document.getElementById('root'));
  } catch (e) {
    console.log('ImageHelper initialization:', e.message);
  }
}
