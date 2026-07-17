import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import ProductPage from "@/pages/ProductPage";
import SimplePage from "@/pages/SimplePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Shell() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-espresso">
      <ScrollToTop />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/collections" element={<SimplePage page="collections" />} />
          <Route path="/about" element={<SimplePage page="about" />} />
          <Route path="/journal" element={<SimplePage page="journal" />} />
          <Route path="*" element={<SimplePage page="404" />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Shell />
      </CartProvider>
    </BrowserRouter>
  );
}
