import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { CartProvider } from './contexts/CartContext';

export function Layout() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}