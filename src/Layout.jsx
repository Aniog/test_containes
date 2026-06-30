import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow flex flex-col mt-20 md:mt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;