import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
