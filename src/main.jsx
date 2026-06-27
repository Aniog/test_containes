import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

document.documentElement.classList.add("js-enabled");

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

hydrateRoot(document.getElementById("root"), <App />);
