import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");
console.log("main.jsx loaded, root:", root);

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log("render called successfully");
} catch (err) {
  console.error("Render error:", err);
  root.innerHTML = '<div style="color:red;padding:20px;">Error: ' + err.message + '</div>';
}
