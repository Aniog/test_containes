import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';
import CartDrawer from '@/components/layout/CartDrawer';
import { CartProvider } from '@/context/CartContext';

export default function Layout() {
  return (
    <CartProvider>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
