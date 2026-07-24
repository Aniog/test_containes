import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";

// Root-level image loader: lives in App.jsx so it appears in every component's
// import chain. Scans the full document after each route change so newly
// mounted tagged elements get resolved.
function GlobalImageLoader() {
  const { pathname } = useLocation();
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.body);
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      ImageHelper.disconnect(document.body);
    };
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalImageLoader />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections/:category" element={<Collection />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
