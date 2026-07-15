import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return () => {
       if (typeof cleanup === 'function') cleanup();
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-velmora-sand text-velmora-charcoal" ref={containerRef}>
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
