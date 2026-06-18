import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <NavBar transparentOverHero={isHome} />
      <main className={isHome ? '' : 'pt-16 md:pt-20'}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
