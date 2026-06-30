import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import CartDrawer from './CartDrawer.jsx';
import { useCart } from '@/context/CartContext';

const Layout = () => {
  const containerRef = useRef(null);
  const { pathname } = useLocation();
  const { cartItems, isCartOpen } = useCart();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scan for images
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, cartItems, isCartOpen]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
