import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import NotFound from "@/pages/NotFound";

function PreviewNavBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      navigate(path, { replace });
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PreviewNavBridge />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
