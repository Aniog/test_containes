import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import strkImgConfig from "./strk-img-config.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App strkImgConfig={strkImgConfig} />
  </React.StrictMode>
);
