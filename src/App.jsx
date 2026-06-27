import { Routes, Route, useLocation } from "react-router-dom";
import ComingSoon from "@/pages/ComingSoon";
import { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-ink">
        <Navbar />
        <CartDrawer />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<Journal />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/sustainability"
              element={<ComingSoon />}
            />
            <Route path="/press" element={<ComingSoon />} />
            <Route path="/careers" element={<ComingSoon />} />
            <Route
              path="/help/shipping"
              element={<ComingSoon />}
            />
            <Route
              path="/help/returns"
              element={<ComingSoon />}
            />
            <Route path="/help/care" element={<ComingSoon />} />
            <Route path="/help/faq" element={<ComingSoon />} />
            <Route path="/help/contact" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

