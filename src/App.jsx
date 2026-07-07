import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (containerRef.current) {
      const timer = requestAnimationFrame(() => {
        try {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        } catch (e) {
          // Image loading is optional for dev
        }
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
