import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shop" element={<CollectionPage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/category/:categoryName" element={<CollectionPage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
);
