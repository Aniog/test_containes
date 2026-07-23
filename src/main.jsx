import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Layout.jsx?velmora=20260723";
import Home from "@/pages/Home.jsx?velmora=20260723";
import ProductDetail from "@/pages/ProductDetail.jsx?velmora=20260723";
import Shop from "@/pages/Shop.jsx?velmora=20260723";
import { CartProvider } from "@/context/CartContext.jsx";
import "./index.css";
import "./App.css";
import "./velmora-overrides.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
