import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children, onCartClick }) {
  return (
    <div className="min-h-screen bg-velmora-cream flex flex-col">
      <Navbar onCartClick={onCartClick} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      // Navigation handled by React Router
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout onCartClick={() => setCartOpen(true)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
