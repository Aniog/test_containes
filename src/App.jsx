import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartDrawer from "./components/layout/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Journal from "./pages/Journal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function PreviewNavBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      if (replace) navigate(path, { replace: true });
      else navigate(path);
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);
  return null;
}

function AppShell() {
  return (
    <CartProvider>
      <ScrollToTop />
      <PreviewNavBridge />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route
            path="*"
            element={
              <div className="bg-ivory pt-32 pb-32 text-center container-velmora">
                <p className="eyebrow">404</p>
                <h1 className="heading-display text-4xl md:text-5xl mt-3">
                  Page not found.
                </h1>
                <p className="mt-3 font-sans text-ink-soft">
                  The page you’re looking for has wandered off.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
