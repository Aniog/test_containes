import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx?velmora-storefront-v6";
import "./index.css?velmora-theme";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
