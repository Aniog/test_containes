import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            fontFamily: "'Inter', sans-serif",
            borderRadius: '0px',
            background: '#1A1A1A',
            color: '#F5F2ED',
            border: 'none',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }
        }} 
      />
    </div>
  );
};

export default Layout;
