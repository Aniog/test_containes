import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;