import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <CartDrawer />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
};

export default Layout;