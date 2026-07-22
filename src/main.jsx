import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

window.addEventListener("error", (event) => {
  console.error("Global error:", event.message, event.filename, event.lineno);
  const errorDiv = document.createElement("div");
  errorDiv.style.cssText = "position:fixed;top:0;left:0;right:0;background:red;color:white;padding:10px;z-index:9999;font-family:monospace;font-size:12px;";
  errorDiv.textContent = `ERROR: ${event.message} at ${event.filename}:${event.lineno}`;
  document.body.appendChild(errorDiv);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled rejection:", event.reason);
  const errorDiv = document.createElement("div");
  errorDiv.style.cssText = "position:fixed;top:0;left:0;right:0;background:red;color:white;padding:10px;z-index:9999;font-family:monospace;font-size:12px;";
  errorDiv.textContent = `UNHANDLED REJECTION: ${event.reason}`;
  document.body.appendChild(errorDiv);
});

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("React render called successfully");
} catch (error) {
  console.error("React render failed:", error);
  const errorDiv = document.createElement("div");
  errorDiv.style.cssText = "position:fixed;top:0;left:0;right:0;background:red;color:white;padding:10px;z-index:9999;font-family:monospace;font-size:12px;";
  errorDiv.textContent = `REACT RENDER ERROR: ${error.message}`;
  document.body.appendChild(errorDiv);
}
