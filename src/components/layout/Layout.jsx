import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          borderRadius: '0px',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontSize: '10px',
        }
      }} />
    </div>
  );
};

export default Layout;
