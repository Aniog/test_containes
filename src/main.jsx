import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// if (import.meta.env.DEV) {
//   import("./visual-edit/index.js").catch(err => console.warn('visual-edit skipped:', err));
// }

const rootEl = document.getElementById("root");
console.log("[main] root element:", rootEl);

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
console.log("[main] App render done");
