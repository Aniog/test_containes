import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
