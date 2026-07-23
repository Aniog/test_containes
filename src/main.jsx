import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.jsx";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Layout from './Layout';
import { CartProvider } from './context/CartContext';
import "./index.css";

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
            <Route path="/*" element={
              <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-serif mb-4">Coming Soon</h1>
                <p className="text-muted-foreground">This page is currently under construction.</p>
              </div>
            } />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
