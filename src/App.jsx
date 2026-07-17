import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductDetail from '@/components/product/ProductDetail';
import ShopPage from '@/components/shop/ShopPage';

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
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
