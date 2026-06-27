import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./Layout.jsx";
import Generators from "./pages/Generators.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/generators" replace />} />
          <Route path="generators" element={<Generators />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
