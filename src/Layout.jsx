import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, CartDrawer } from './components/Navbar';
import Footer from './components/Footer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/hooks/useCart';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();
  const { cart, isCartOpen } = useCart();

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [location.pathname, location.search, cart, isCartOpen]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-[#F9F7F2]">
      <Navbar />
      <CartDrawer />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
