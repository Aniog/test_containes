import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import CartDrawer from './CartDrawer';
import Footer from './Footer';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-center" richColors closeButton />
    </div>
  );
};

export default Layout;
