import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/sonner"
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster position="bottom-center" />
  </React.StrictMode>,
);
