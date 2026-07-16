import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { useImageLoader } from './hooks/useImageLoader';
import { useCartStore } from './store/useCartStore';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();
  const { closeCart } = useCartStore();
  
  useImageLoader(containerRef);

  useEffect(() => {
    closeCart();
  }, [location.pathname, closeCart]);

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;