import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}