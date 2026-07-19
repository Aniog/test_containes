import React from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
