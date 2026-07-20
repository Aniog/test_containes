import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
