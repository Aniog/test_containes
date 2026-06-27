import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import SearchOverlay from './SearchOverlay';
import ImageRegistry from '@/data/imageRegistry';
import strkImgConfig from '@/strk-img-config.json';

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-cream">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {/* Hidden image-id registry — see src/data/imageRegistry.jsx */}
      <ImageRegistry />
    </div>
  );
}