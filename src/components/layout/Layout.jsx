import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-base">
      <Toaster position="top-center" expand={false} richColors />
      <Header />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
