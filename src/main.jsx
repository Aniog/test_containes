import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

window.addEventListener("error", (e) => {
  console.error("[BOOT ERROR]", e.error || e.message);
});
window.addEventListener("unhandledrejection", (e) => {
  console.error("[BOOT PROMISE ERROR]", e.reason);
});

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
