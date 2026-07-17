import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/footer/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { CartProvider } from '@/context/CartContext';

export default function Layout() {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
