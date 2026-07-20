// Note: This needs to be imported somewhere to track
import { ImageHelper } from '@strikingly/sdk';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useLocation } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />
      <main className={`flex-grow ${!isHome ? 'pt-24' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;