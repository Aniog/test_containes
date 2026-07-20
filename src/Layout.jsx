import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-stone transition-colors duration-500">
      <h1 style={{ color: 'red', position: 'fixed', top: 0, right: 0, zIndex: 9999, background: 'white' }}>LAYOUT LOADED</h1>

      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default Layout;
