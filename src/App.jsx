import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import ImagePreload from "@/components/ImagePreload";
import "./App.css";

function PreviewNavigationBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      navigate(path, { replace: Boolean(opts?.replace) });
    };
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
      }
    };
  }, [navigate]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewNavigationBridge />
        <ImagePreload />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          {/* Fallback routes route to home or shop */}
          <Route path="/about" element={<Home />} />
          <Route path="/journal" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
