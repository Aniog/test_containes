import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartOpen={() => setCartOpen(true)} onSearchOpen={() => setSearchOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
