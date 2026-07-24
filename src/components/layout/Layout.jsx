import React from 'react';
import { Outlet } from 'react-router-dom';
import StickyNav from './StickyNav';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <StickyNav />
      <CartDrawer />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
