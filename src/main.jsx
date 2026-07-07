import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Visual editor is disabled in this preview to keep cart/navigation interactions
// reachable. Re-enable in development if visual editing is needed.
// if (import.meta.env.DEV) {
//   import("./visual-edit/index.js");
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
