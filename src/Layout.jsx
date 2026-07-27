import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { ImageHelper } from '@strikingly/sdk';
import { Toaster } from 'sonner';

const Layout = () => {
  const { pathname } = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // In a real scenario, we'd have a valid strkImgConfig
    // For now, we'll just initialize it if the helper is available
    if (ImageHelper && ImageHelper.loadImages) {
      const config = {}; // Placeholder config
      ImageHelper.loadImages(config, containerRef.current);
    }
  }, [pathname]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Layout;
