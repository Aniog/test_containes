import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function AppContent() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = requestAnimationFrame(() => {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" ref={containerRef}>
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="font-serif text-4xl md:text-5xl tracking-widest uppercase text-warm-800">
          {title}
        </h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4" />
        <p className="font-sans text-sm text-warm-400">Coming soon</p>
      </div>
    </div>
  );
}

export default App;
