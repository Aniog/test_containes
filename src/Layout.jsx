import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream text-base">
      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  );
}
