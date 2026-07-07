import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { CartDrawer } from './CartDrawer';
import { Footer } from './Footer';
import { useCart } from '@/contexts/CartContext';

function CartRouteWatcher() {
  const { pathname } = useLocation();
  const { closeCart } = useCart();

  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);

  return null;
}

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <CartRouteWatcher />
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
