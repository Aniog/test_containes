import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from '../ui/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
