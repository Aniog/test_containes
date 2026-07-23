import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children, hideFooter = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      {!hideFooter && <Footer />}
      <CartDrawer />
    </div>
  );
};

export default Layout;
