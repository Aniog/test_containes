// Velmora Fine Jewelry - Layout Component
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
