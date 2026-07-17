import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import "./App.css";

// Top-level image loader. Sits in the importer chain of every component that
// renders data-strk-img / data-strk-bg slots, so the static runtime-loader
// check is satisfied app-wide. Re-scans on every route change so newly mounted
// images (product pages, filtered grids, etc.) are populated.
function GlobalImageLoader({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (typeof document !== "undefined" && document.body) {
        ImageHelper.loadImages(strkImgConfig, document.body);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return children;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalImageLoader>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Navigate to="/shop" replace />} />
              <Route path="/journal" element={<Navigate to="/about" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </GlobalImageLoader>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
