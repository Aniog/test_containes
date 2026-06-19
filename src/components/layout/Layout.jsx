import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartDrawer />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
