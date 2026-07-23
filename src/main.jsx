import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx?v=velmora-202607230925";
import "./index.css?v=velmora-202607230925";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
