import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CollectionsPage from "@/pages/CollectionsPage";
import JournalPage from "@/pages/JournalPage";
import AboutPage from "@/pages/AboutPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="container-editorial flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">
        That page is not in the collection.
      </h1>
      <a href="/" className="btn-primary mt-8">
        Back to home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-cream">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: "#1B1611",
                color: "#FAF6EE",
                border: "none",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
              },
            }}
          />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
