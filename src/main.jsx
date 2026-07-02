import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Temporarily skip visual-edit to debug blank page
// if (import.meta.env.DEV) {
//   import("./visual-edit/index.js");
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
