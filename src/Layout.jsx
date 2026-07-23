import React from 'react';
import Navigation from './components/ui/Navigation';
import CartDrawer from './components/ui/CartDrawer';
import Footer from './components/ui/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
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
