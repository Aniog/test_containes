import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] selection:bg-[#9D8C70]/20">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;
