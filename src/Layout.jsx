import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;