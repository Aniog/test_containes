import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

window.addEventListener("error", (e) => {
  if (import.meta.env.DEV) {
    console.error("[Velmora] window error:", e?.error || e?.message);
  }
});
window.addEventListener("unhandledrejection", (e) => {
  if (import.meta.env.DEV) {
    console.error("[Velmora] unhandled rejection:", e?.reason);
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
