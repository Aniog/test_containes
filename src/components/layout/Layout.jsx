import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-velvet-900">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      {children}
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}