import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-velvet text-champagne">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App
