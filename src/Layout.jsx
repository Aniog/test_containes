import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider } from './contexts/CartContext';

export default function Layout() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}