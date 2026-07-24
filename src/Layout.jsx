import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function Layout() {
  const [cartOpen, setCartOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}