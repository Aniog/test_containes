import React from "react";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// The /generators hub is a fully static page rendered directly in index.html
// (content lives inside #root). We intentionally do NOT call createRoot().render()
// here, because that would wipe the static markup. Interactivity is handled by
// vanilla JS in src/generators-page.js.
