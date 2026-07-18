import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children, cartCount, onCartOpen, onSearch }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} onCartOpen={onCartOpen} onSearch={onSearch} />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;