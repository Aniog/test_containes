import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}