import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// if (import.meta.env.DEV) {
//   import("./visual-edit/index.js");
// }

console.log("main.jsx loaded");

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  document.body.innerHTML = "<h1>Root element not found!</h1>";
}
