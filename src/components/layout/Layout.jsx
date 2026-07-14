import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Initial scan
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    
    // Some elements might render after a short delay or due to state transitions
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });

    return () => {
      if (cleanup) cleanup();
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname, children]); // Re-scan on route change or children update

  return (
    <div className="min-h-screen flex flex-col font-sans" ref={containerRef}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default Layout;
