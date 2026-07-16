import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent/30">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            fontFamily: 'Inter, sans-serif',
            borderRadius: '0',
            backgroundColor: '#26211E',
            color: '#F9F7F5',
            border: 'none',
          },
        }}
      />
    </div>
  );
};

export default Layout;
