import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
