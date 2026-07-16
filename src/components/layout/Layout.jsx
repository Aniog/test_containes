import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
};

export default Layout;