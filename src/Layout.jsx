import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { CartProvider, useCart } from './lib/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const LayoutContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { pathname } = useLocation();
  const containerRef = useRef(null);
  const { cart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Initial load and whenever cart changes (to populate images in drawer)
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, cart, isCartOpen]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-secondary text-primary font-sans selection:bg-accent selection:text-secondary">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Layout = () => (
  <CartProvider>
    <LayoutContent />
  </CartProvider>
);

export default Layout;
