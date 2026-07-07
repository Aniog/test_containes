import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2C2522]">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;