import React from "react";
import ReactDOM from "react-dom/client";
import { flushSync } from "react-dom";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
flushSync(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
