import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Nav onCartOpen={() => setCartOpen(true)} />
      <Outlet />
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}