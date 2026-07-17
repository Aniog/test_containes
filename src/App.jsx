import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import About from "@/pages/About";
import Journal from "@/pages/Journal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function PreviewNavigateBridge() {
  // Expose navigate to the parent preview window
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (event) => {
      const data = event.data;
      if (
        !data ||
        data.channel !== "strikingly-preview" ||
        data.type !== "route:navigate"
      ) {
        return;
      }
      // Navigation is handled by react-router via pushState hook.
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);
  return null;
}

function NotFound() {
  return (
    <main className="bg-canvas pt-32 md:pt-40">
      <div className="container-editorial py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-5xl text-ink">Page not found</h1>
        <p className="mt-3 text-ink-secondary">
          The page you are looking for has moved or no longer exists.
        </p>
        <a href="/" className="mt-8 inline-block btn-primary">
          Return Home
        </a>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewNavigateBridge />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
