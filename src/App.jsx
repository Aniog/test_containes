import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import JournalPage from "./pages/JournalPage";
import { CartProvider } from "./context/CartContext";
import { useEffect } from "react";

// Bridge: react-router-dom <-> window.__STRIKINGLY_PREVIEW_NAVIGATE__
function RouterBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    const onNav = (e) => {
      const { path, options } = e.detail || {};
      if (typeof path === "string" && path) {
        navigate(path, options);
      }
    };
    window.addEventListener("velmora:navigate", onNav);
    return () => window.removeEventListener("velmora:navigate", onNav);
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <RouterBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
