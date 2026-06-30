import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Remove the static loading shell once React has painted its first frame.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const shell = document.getElementById("app-shell");
    if (shell) shell.remove();
  });
});
