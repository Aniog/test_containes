import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import { Toaster } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initial load and on route change
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return () => {
      if (cleanup && typeof cleanup === 'function') cleanup();
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
