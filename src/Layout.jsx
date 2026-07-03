import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-hidden z-0">
      <Header />
      <CartDrawer />
      <main className="flex-1 w-full mx-auto relative z-10 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}