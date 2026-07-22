import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import NotFound from "@/pages/NotFound";

// Bridge the Strikingly preview's __STRIKINGLY_PREVIEW_NAVIGATE__ hook
// into React Router so external navigation commands update the app.
function PreviewRouteBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      if (!path) return;
      navigate(path, { replace });
    };
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
      }
    };
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PreviewRouteBridge />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
