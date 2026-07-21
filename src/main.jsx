import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Debug: catch render errors
const rootEl = document.getElementById("root");
console.log("[main] root element:", rootEl);

if (import.meta.env.DEV) {
  import("./visual-edit/index.js").catch(err => {
    console.warn("[main] visual-edit import failed:", err);
  });
}

try {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log("[main] render called successfully");
} catch (err) {
  console.error("[main] render error:", err);
  rootEl.innerHTML = `<pre style="padding:40px;font-size:14px;color:red;">Render Error: ${err.message}\n\n${err.stack}</pre>`;
}
