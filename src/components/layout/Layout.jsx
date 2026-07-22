import React from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink antialiased">
      <Navbar />
      <main>{children}</main>
      <CartDrawer />
    </div>
  );
};

export default Layout;
