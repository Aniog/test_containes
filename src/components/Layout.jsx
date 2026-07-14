import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import Toaster from './Toaster';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster />
    </div>
  );
};

export default Layout;
