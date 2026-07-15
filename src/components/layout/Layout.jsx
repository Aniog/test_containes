import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, []);

  // Re-scan images when cart opens (cart images render)
  useEffect(() => {
    if (cartOpen && containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [cartOpen]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
