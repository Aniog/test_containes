import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx?velmora-runtime=20260714d";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
