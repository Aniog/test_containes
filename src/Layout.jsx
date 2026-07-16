import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';

const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Sync cart count with localStorage or a global state in a real app
  // For now, we'll just handle it locally
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleCart={toggleCart} cartCount={cartCount} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Layout;
