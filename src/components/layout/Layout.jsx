import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-black">
      <Navbar />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
