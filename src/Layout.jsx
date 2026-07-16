import React, { useEffect, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { Toaster } from 'sonner';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@/lib/sdk-mock';
import strkImgConfig from './strk-img-config.json';
import { useCart } from './lib/CartContext';

const Layout = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const { isCartOpen } = useCart();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Universal image loader
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search, isCartOpen]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
