import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const Layout = ({ children, onCartOpen }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onCartOpen={onCartOpen} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
