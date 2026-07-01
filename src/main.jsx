import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Only import visual-edit in development mode
if (import.meta.env.DEV) {
  try {
    import("./visual-edit/index.js");
  } catch (e) {
    console.warn("Visual edit plugin failed to load:", e);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
