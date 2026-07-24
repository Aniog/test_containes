import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isCartOpenAtom } from './lib/store';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Load images on any route change or initial render
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-accent/30" ref={containerRef}>
      <Toaster position="top-center" expand={false} richColors closeButton />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
