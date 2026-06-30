import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import Help from "@/pages/Help";
import Checkout from "@/pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/help" element={<Help />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="*"
              element={
                <div className="container-editorial pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
                  <div className="label-eyebrow text-mute mb-3">404</div>
                  <h1 className="font-display text-5xl">Page not found</h1>
                  <p className="mt-3 text-mute">This page wandered off.</p>
                </div>
              }
            />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1F1A17",
              color: "#FAF6EF",
              border: "1px solid #3A332E",
              fontSize: "13px",
              letterSpacing: "0.04em",
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
  );
}
