import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
// @ts-ignore
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { useCart } from './context/CartContext';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();
  const { isCartOpen, cart } = useCart();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Load images for the new page
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    
    return () => cancelAnimationFrame(frameId);
  }, [location.pathname]);

  useEffect(() => {
    // Also scan when cart opens because it might have new images
    if (isCartOpen && containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart.length]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans text-primary bg-white selection:bg-accent selection:text-white">
      <Navigation />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
