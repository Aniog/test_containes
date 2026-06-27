import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import routes from "./routes.jsx";
import "./index.css";

export const createRoot = ViteReactSSG(
  { routes },
  () => {
    // No client-only setup needed beyond the entry above.
  }
);

// Dev-only visual edit bridge preserved from the template.
if (typeof window !== "undefined" && import.meta.env && import.meta.env.DEV) {
  import("./visual-edit/index.js");
}