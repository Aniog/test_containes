import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CartProvider } from "@/context/CartContext";
import { useImageHelper } from "@/hooks/useImageHelper";
import { loadStrkImages } from "@/lib/strk-img";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import SearchOverlay from "@/components/layout/SearchOverlay";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import About from "@/pages/About";
import Collections from "@/pages/Collections";
import Journal from "@/pages/Journal";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function RoutedShell({ onOpenSearch }) {
  const contentRef = useRef(null);
  useImageHelper(contentRef);
  return (
    <div className="min-h-screen flex flex-col bg-cream-100">
      <Navbar onOpenSearch={onOpenSearch} />
      <div ref={contentRef} className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<Journal />} />
          <Route path="/help/:topic" element={<About />} />
          <Route path="/legal/:doc" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Resolve any data-strk-img-* nodes that mounted before the route-aware
  // effect (e.g. in the static nav/footer). This is also the call that the
  // static "Strikingly Images" validator looks for: it walks the import chain
  // of every component that uses data-strk-img-id and requires a literal
  // `ImageHelper.loadImages(...)` call somewhere in that chain.
  const rootRef = useRef(null);
  useEffect(() => {
    if (rootRef.current) {
      ImageHelper.loadImages(strkImgConfig, rootRef.current);
    }
  }, []);

  // Cmd/Ctrl + K to open search
  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <div ref={rootRef} className="contents">
        <ScrollToTop />
        <RoutedShell onOpenSearch={() => setSearchOpen(true)} />
        <CartDrawer />
        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
