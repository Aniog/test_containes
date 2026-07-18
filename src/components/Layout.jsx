import React from 'react';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import CartDrawer from './ui/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
