import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Toaster } from 'sonner';

const Layout = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Initial and periodic image loading
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-velmora-cream/20">
      <div id="site-brand-name" className="hidden">Velmora Fine Jewelry</div>
      <div id="site-mood" className="hidden">Luxury demi-fine gold jewelry lifestyle editorial</div>
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Layout;
