import React from 'react';
import Navigation from './ui/Navigation';
import Footer from './ui/Footer';
import CartDrawer from './ui/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
