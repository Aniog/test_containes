import React from 'react';
import Navigation from './Navigation';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;