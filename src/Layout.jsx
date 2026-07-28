import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Trigger image loading
    // Using requestAnimationFrame to ensure React has committed the new DOM
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={containerRef}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Layout;
