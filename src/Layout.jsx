import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-luxury-black">
      <Navbar />
      <CartDrawer />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
