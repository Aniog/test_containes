import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Shop />} />
          <Route path="collections/:category" element={<Shop />} />
          <Route path="products/:slug" element={<Product />} />
          <Route path="*" element={<Home />} /> {/* Temporary fallback */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
