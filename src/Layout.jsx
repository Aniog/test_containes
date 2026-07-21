import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Layout = () => {
  return (
    <>
      <Nav />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
