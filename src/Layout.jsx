import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CartDrawer from './components/layout/CartDrawer';
import Footer from './components/layout/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
