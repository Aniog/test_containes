import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function PreviewNavigateBridge() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      const url = new URL(path, window.location.origin);
      window.history[options.replace ? "replaceState" : "pushState"](
        {},
        "",
        url.pathname + url.search + url.hash
      );
      window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
    };
  }, []);
  useEffect(() => {
    if (window.parent && window.parent !== window) {
      try {
        window.parent.postMessage(
          {
            channel: "strikingly-preview",
            version: 1,
            type: "route:changed",
            payload: {
              url: window.location.href,
              origin: window.location.origin,
              path: pathname,
              pathname,
              title: document.title,
            },
          },
          "*"
        );
      } catch {}
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <PreviewNavigateBridge />
        <Header />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
