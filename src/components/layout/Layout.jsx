import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7]">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow pt-[73px]">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Layout;
