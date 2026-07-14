import React from 'react';
import { Navbar, Footer } from './components/layout/Navigation';

const Layout = ({ children, onCartClick }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={onCartClick} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
