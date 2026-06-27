import React from "react";
import GeneratorsPage from "./pages/GeneratorsPage";

// Vite React SSG route table. Each path will be pre-rendered to a static HTML
// file at build time and served as SSR in dev.
const routes = [
  { path: "/", element: <GeneratorsPage /> },
  { path: "/generators", element: <GeneratorsPage /> },
];

export default routes;