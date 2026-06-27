import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const fallback = document.getElementById("static-fallback");
if (fallback) fallback.style.display = "none";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
