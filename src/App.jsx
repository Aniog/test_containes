import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import "./App.css";

// Bridge the parent preview iframe's route bridge to React Router.
function PreviewNavBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      const fn = options.replace ? "replace" : "push";
      navigate(`/${path.replace(/^\//, "")}`.replace(/\/+/g, "/"), { replace: options.replace });
      // Hint the iframe bridge we handled it
      if (typeof fn === "string") void fn;
    };
    return () => {
      if (typeof window !== "undefined") {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
      }
    };
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewNavBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
