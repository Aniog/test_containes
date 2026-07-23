import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-surface text-ink antialiased">
      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
