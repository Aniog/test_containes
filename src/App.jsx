import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import "./App.css";

// Bridges the Strikingly preview runtime to react-router.
// Must be rendered INSIDE <BrowserRouter> so useNavigate has a Router context.
function PreviewNavigateBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      if (options && options.replace) navigate(path, { replace: true });
      else navigate(path);
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);
  return null;
}

// Top-level Strikingly image loader — scans the document for any
// data-strk-img-id / data-strk-bg-id tags on every page so individual
// section components don't need their own loader call.
function GlobalStrkImageLoader() {
  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      const root = document.body || document.getElementById("root");
      if (root) ImageHelper.loadImages(strkImgConfig, root);
    });
    return () => {
      window.cancelAnimationFrame(id);
    };
  }, []);
  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewNavigateBridge />
        <GlobalStrkImageLoader />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<Product />} />
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
