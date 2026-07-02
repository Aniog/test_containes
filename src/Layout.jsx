import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import { Toaster } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const Layout = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Initial load
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    
    // Rerun on route change to capture new elements
    const timeout = setTimeout(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-background text-primary selection:bg-accent/30">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default Layout;
