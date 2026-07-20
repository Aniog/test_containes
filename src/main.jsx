import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App.jsx";
import "./index.css";

// if (import.meta.env.DEV) {
//   import("./visual-edit/index.js");
// }

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("#root element not found in DOM");
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  );
}
