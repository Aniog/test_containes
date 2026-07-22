import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log("main.jsx: Starting...");

try {
  const root = document.getElementById("root");
  console.log("Root element:", root);
  
  if (root) {
    ReactDOM.createRoot(root).render(<App />);
    console.log("App rendered");
  } else {
    console.error("No root element!");
  }
} catch (e) {
  console.error("Error:", e);
}
