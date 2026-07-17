import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, Link } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="bg-ivory pt-32 pb-32 min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <p className="kicker mb-4">404</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light text-ink mb-4 text-balance">
          A page that doesn't exist — yet.
        </h1>
        <p className="text-ink-muted mb-8 max-w-md mx-auto text-pretty">
          The page you're looking for may have moved or is no longer available.
        </p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </main>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Wire route bridge for the preview iframe (incoming "route:navigate" messages)
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, { replace: options.replace });
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);

  return (
    <CartProvider>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CartDrawer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1B1612",
            color: "#FAF6EF",
            border: "1px solid #3A3027",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          },
        }}
      />
    </CartProvider>
  );
}

export default App;
