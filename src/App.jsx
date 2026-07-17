import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import Toaster from "@/components/ui/Toast";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // Don't auto-scroll on home, Hero handles its own height
    if (location.pathname === "/") return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.search]);
  return null;
}

function AppShell() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink font-sans">
      <ScrollToTop />
      <Nav />
      <CartDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productSlug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
