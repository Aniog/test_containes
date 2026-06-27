import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

console.log("Assets and styles loaded.");
