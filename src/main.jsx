import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log("[main] starting...", { App: typeof App });

const rootEl = document.getElementById("root");
console.log("[main] root element:", rootEl);

try {
  const root = ReactDOM.createRoot(rootEl);
  console.log("[main] root created");
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("[main] render OK");
} catch (e) {
  console.error("[main] ERROR:", e);
  if (rootEl) {
    rootEl.innerHTML = "<pre style='color:red;padding:20px'>" + (e.stack || e.message) + "</pre>";
  }
}
