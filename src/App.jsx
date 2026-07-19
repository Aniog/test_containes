import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { ImageHelper } from "@strikingly/sdk";
// @ts-ignore — runtime JSON populated by the Vite plugin
import strkImgConfig from "@/strk-img-config.json";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import "./App.css";

/**
 * App-level image loader. Scans the whole document.body for data-strk-img
 * and data-strk-bg tags whenever the route changes, so every page (and any
 * modal/drawer/portal mounted into body) is covered.
 */
function AppImageLoader() {
  const location = useLocation();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const config = strkImgConfig && Object.keys(strkImgConfig).length
      ? strkImgConfig
      : {};
    const node = document.body;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(config, node);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppImageLoader />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1C1612",
            color: "#FAF7F2",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            border: "1px solid #3A2E26",
            padding: "12px 20px",
          },
        }}
      />
    </CartProvider>
  );
}

export default App;
