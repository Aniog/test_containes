import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <Nav onCartOpen={() => setCartOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}