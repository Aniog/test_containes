import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// Expose navigate for preview bridge
function AppWithNavigateRef() {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate;
  }, [navigate]);
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithNavigateRef />
  </React.StrictMode>,
);
