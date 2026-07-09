import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import CartDrawer from './components/ui/CartDrawer';
import { CartProvider } from './lib/CartContext';

const Layout = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <CartDrawer />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
