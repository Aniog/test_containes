import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./lib/CartContext";
import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import { Toaster } from "sonner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "./strk-img-config.json";

function AppContent() {
  const containerRef = useRef(null);
  const { pathname, search } = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, search]);

  return (
    <div ref={containerRef}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<div className="pt-40 pb-24 container text-center"><h1 className="text-6xl font-serif mb-12">Our Story</h1><p className="max-w-2xl mx-auto leading-relaxed text-lg">Velmora Fine Jewelry is built on the belief that everyday moments deserve a touch of luxury. Our pieces are crafted with care, using premium materials to ensure they remain as radiant as the day you first wore them.</p></div>} />
          <Route path="/journal" element={<div className="pt-40 pb-24 container text-center"><h1 className="text-6xl font-serif mb-12">Journal</h1><p className="max-w-2xl mx-auto leading-relaxed text-lg">Coming Soon. A collection of stories, styling tips, and brand updates.</p></div>} />
        </Routes>
      </Layout>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
      <Toaster position="bottom-right" />
    </CartProvider>
  );
}

export default App;

