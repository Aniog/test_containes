import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// CSS is loaded inline in index.html so the page renders correctly with
// JavaScript disabled. Do not import any stylesheets here that would
// override the inline styles after JS runs.

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
