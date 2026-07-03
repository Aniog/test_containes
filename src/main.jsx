import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register navigate function for preview bridge
if (typeof window !== 'undefined') {
  import('react-router-dom').then(({ useNavigate }) => {
    // The bridge is handled by the route bridge script in index.html
  }).catch(() => {});
}
