import React from 'react';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

const Layout = ({ children, cartCount, onCartOpen }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} onCartOpen={onCartOpen} />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;