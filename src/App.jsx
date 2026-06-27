import React from "react";
import GeneratorsPage from "./pages/GeneratorsPage";

// Single-page app entry. The route table in routes.jsx is also imported by
// main.jsx for vite-react-ssg; this default export keeps the legacy App.jsx
// surface so any tooling that imports App still gets a valid component.
export default function App() {
  return <GeneratorsPage />;
}
