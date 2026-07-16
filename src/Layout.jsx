import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-base selection:bg-velmora-accent/20">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
