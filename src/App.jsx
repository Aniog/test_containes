import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velvet-950 text-warm-50 font-sans">
          <ScrollToTop />
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

function AboutPage() {
  return (
    <div className="pt-32 pb-20 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide">Our Story</h1>
        <p className="mt-6 text-warm-400 leading-relaxed">
          Velmora was born in Barcelona, where sun-warmed terracotta meets the Mediterranean light. Our founder, a third-generation jeweler, set out to create pieces that feel both timeless and modern — jewelry that women reach for every morning, not just on special occasions.
        </p>
        <p className="mt-4 text-warm-400 leading-relaxed">
          Each design is sketched by hand in our atelier, then brought to life through a meticulous process of lost-wax casting and hand-polishing. We use only 18K gold plating over recycled brass, with ethically sourced crystals and conflict-free cubic zirconia.
        </p>
        <p className="mt-4 text-warm-400 leading-relaxed">
          We believe luxury should be accessible, sustainable, and made to last. That's why every Velmora piece is hypoallergenic, nickel-free, and backed by a 12-month warranty.
        </p>
      </div>
    </div>
  );
}

function JournalPage() {
  return (
    <div className="pt-32 pb-20 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide">Journal</h1>
        <p className="mt-6 text-warm-400 leading-relaxed">
          Stories of craftsmanship, style inspiration, and the women who wear Velmora. Coming soon.
        </p>
      </div>
    </div>
  );
}
