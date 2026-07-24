import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { Toaster } from 'sonner';
import { useCart } from './context/CartContext';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();
  const { isCartOpen } = useCart();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Load images on route change, cart open/close, and initial mount
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, isCartOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans selection:bg-gold/30" ref={containerRef}>
      <Toaster position="bottom-right" className="font-sans" />
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
