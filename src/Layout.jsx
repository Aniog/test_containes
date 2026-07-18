import React, { useEffect, useRef } from 'react';
import { ImageHelper } from './lib/strk-sdk';
import { CartProvider } from './context/CartContext';
import { Header, Footer, CartDrawer } from './components/layout/Layout';

export default function Layout({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically import config to handle development before it exists
    const loadConfig = async () => {
      try {
        if (typeof ImageHelper !== 'undefined') {
          const config = await import('./strk-img-config.json', { assert: { type: 'json' } }).catch(() => null);
          if (config && ImageHelper) {
            ImageHelper.loadImages(config.default || config, containerRef.current);
          }
        }
      } catch (e) {
        // ignore
      }
    };
    loadConfig();
  }, [children]);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen" ref={containerRef}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
