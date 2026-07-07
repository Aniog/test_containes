import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CartDrawer from './components/shop/CartDrawer';
import { Toaster } from 'sonner';
import { useCart } from './context/CartContext';

const Layout = ({ children }) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCart();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow pt-[72px] md:pt-[88px]">
        {children}
      </main>
      
      <Footer />
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          borderRadius: '0',
          fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '10px'
        }
      }} />
    </div>
  );
};

export default Layout;
