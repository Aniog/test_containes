import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import CartDrawer from './components/cart/CartDrawer';
import { Toaster } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const containerRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Load images on route change
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, children]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" richColors toastOptions={{
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          borderRadius: '0',
          backgroundColor: '#FDFBF7',
          color: '#1A1A1A',
          border: '1px solid #8C7E74'
        }
      }} />
    </div>
  );
};

export default Layout;
