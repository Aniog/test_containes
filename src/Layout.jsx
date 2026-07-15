import React, { useRef, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import CartDrawer from './components/layout/CartDrawer.jsx';
import { useCart } from './context/CartContext.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Toaster } from "sonner";

const Layout = ({ children }) => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartCount } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans text-velmora-charcoal">
      <Navbar onOpenCart={() => setIsCartOpen(true)} cartCount={cartCount} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          className: 'font-sans uppercase text-[10px] tracking-widest bg-white text-velmora-charcoal border-none shadow-xl rounded-none py-4',
        }} 
      />
    </div>
  );
};

export default Layout;
