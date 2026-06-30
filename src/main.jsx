import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx?t=velmora-main-nav-final-20260630";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
