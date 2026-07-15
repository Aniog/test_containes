import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import { Toaster } from '@/components/ui/sonner';

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-warm text-brand-charcoal">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster />
    </div>
  );
};

export default Layout;
