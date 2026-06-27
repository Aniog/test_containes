import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./index.css";
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { Layout } from './components/layout/Layout.jsx'
import { CartProvider } from './context/CartContext.jsx'

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
