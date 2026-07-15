import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import { CartProvider } from "@/context/CartContext";
import "./App.css";

// Lets the preview host (parent window) navigate via postMessage
function PreviewNavigatorBridge() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      if (options.replace) navigate(path, { replace: true });
      else navigate(path);
    };
    return () => {
      try { delete window.__STRIKINGLY_PREVIEW_NAVIGATE__; } catch {}
    };
  }, [navigate]);
  useEffect(() => {
    try {
      window.parent?.postMessage({
        channel: "strikingly-preview",
        version: 1,
        type: "route:changed",
        payload: { pathname: location.pathname, path: location.pathname + location.search, search: location.search, hash: location.hash, title: document.title, url: window.location.href, origin: window.location.origin, source: "react-router", timestamp: Date.now() }
      }, "*");
    } catch {}
  }, [location]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewNavigatorBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
