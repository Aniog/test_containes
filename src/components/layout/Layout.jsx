import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;