import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Load images on route change or initial mount
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0); // Scroll to top on route change
    return cleanup;
  }, [location.pathname]);

  // Also rerun image helper if content changes (e.g. state-driven products)
  // But for simple storefront, location.pathname is usually enough.
  // We'll expose a child-friendly way if needed.

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
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
