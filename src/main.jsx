import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/lib/cart-context'
import "./index.css";

import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections/:collection" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
