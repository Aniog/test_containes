import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../product/CartDrawer';
import { Toaster } from '@/components/ui/sonner';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrolled={scrolled} onCartClick={() => setCartOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;