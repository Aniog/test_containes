import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import SearchOverlay from "@/components/layout/SearchOverlay";
import Toast from "@/components/ui/Toast";
import { CartProvider, UIProvider } from "@/context/CartContext";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import ScrollToTop from "@/components/ScrollToTop";

function NotFound() {
  return (
    <div className="vm-page min-h-[60vh] bg-cream-50 grid place-items-center px-5">
      <div className="text-center">
        <p className="vm-eyebrow text-ink-muted">404</p>
        <h1 className="vm-display text-ink mt-3 text-5xl md:text-7xl leading-[1.02]">
          We can't find <span className="italic font-light">that page.</span>
        </h1>
        <p className="mt-5 max-w-md mx-auto text-ink-muted">The link may be broken, or the piece has been retired. Try the shop instead.</p>
        <Link to="/shop" className="vm-btn vm-btn--primary mt-9 inline-flex">Back to Shop</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <UIProvider>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/shop"      element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about"     element={<About />} />
              <Route path="/journal"   element={<Journal />} />
              <Route path="*"          element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
          <SearchOverlay />
          <Toast />
        </CartProvider>
      </UIProvider>
    </BrowserRouter>
  );
}
