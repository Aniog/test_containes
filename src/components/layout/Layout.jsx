import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2]">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
