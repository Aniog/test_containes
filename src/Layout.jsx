import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/ui/CartDrawer';
import { CartProvider } from './contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

export default function Layout() {
  const layoutRef = useRef(null);

  useEffect(() => {
    // A high-level observer for the whole layout, useful for things like cart items
    // and overall page transitions
    const observer = new MutationObserver(() => {
       if (layoutRef.current) {
          ImageHelper.loadImages(strkImgConfig, layoutRef.current);
       }
    });

    if (layoutRef.current) {
       observer.observe(layoutRef.current, { childList: true, subtree: true });
       ImageHelper.loadImages(strkImgConfig, layoutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen" ref={layoutRef}>
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}