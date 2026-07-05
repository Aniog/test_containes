import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CartDrawer from "@/components/layout/CartDrawer";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import ProductPage from "@/pages/ProductPage";
import AboutPage from "@/pages/AboutPage";
import JournalPage from "@/pages/JournalPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route
            path="*"
            element={
              <main className="pt-32 pb-24">
                <div className="mx-auto max-w-2xl px-6 text-center">
                  <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-3">
                    404
                  </p>
                  <h1 className="font-serif text-5xl text-ink mb-4">Page not found</h1>
                  <p className="text-taupe">
                    The page you're looking for has either moved or never existed.
                  </p>
                </div>
              </main>
            }
          />
        </Routes>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
