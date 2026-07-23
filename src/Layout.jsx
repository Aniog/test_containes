import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import CartDrawer from '@/components/cart/CartDrawer.jsx';

export default function Layout({ children }) {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);

  return (
    <div className="min-h-screen bg-ivory text-espresso">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
