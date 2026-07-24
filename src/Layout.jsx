import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import CartDrawer from './components/cart/CartDrawer.jsx';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Toaster position="bottom-right" />
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