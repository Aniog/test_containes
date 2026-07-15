import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/context/CartContext';

function CartRouteWatcher() {
  const { pathname } = useLocation();
  const { closeCart } = useCart();

  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);

  return null;
}

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <CartDrawer />
      <CartRouteWatcher />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
