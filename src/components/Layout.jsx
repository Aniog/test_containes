import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Toaster } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children, cart, onUpdateQuantity, onRemoveItem, onCartClick, isCartOpen, setIsCartOpen }) => {
  const containerRef = React.useRef(null);

  useEffect(() => {
    // Initial load
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [children]); // Re-scan when children change

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col">
      <Toaster position="bottom-right" expand={false} richColors />
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} onCartClick={onCartClick} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
