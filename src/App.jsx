import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";

// Expose a navigator so the preview host can drive routes via postMessage.
if (typeof window !== "undefined") {
  window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
    if (options.replace) {
      window.history.replaceState({}, "", path);
    } else {
      window.history.pushState({}, "", path);
    }
    window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
  };
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="*"
              element={
                <div className="pt-40 pb-32 text-center bg-canvas min-h-[60vh]">
                  <p className="font-serif text-3xl text-espresso mb-3">Not here yet</p>
                  <p className="text-taupe mb-6">This page is coming soon.</p>
                  <a
                    href="/"
                    className="text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-0.5"
                  >
                    Back home
                  </a>
                </div>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}
