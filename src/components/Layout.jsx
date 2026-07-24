import React from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
