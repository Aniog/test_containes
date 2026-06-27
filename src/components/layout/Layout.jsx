import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children, transparentNav = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-bg">
      <Navbar transparent={transparentNav} />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
