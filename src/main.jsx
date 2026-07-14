import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx?fresh=202607140734";
import "./index.css?fresh=202607140734";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
