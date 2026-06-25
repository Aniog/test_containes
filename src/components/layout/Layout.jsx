import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import ProductImageRegistry from '@/components/ProductImageRegistry';

export default function Layout() {
  const location = useLocation();

  // Pages where the nav floats over a dark hero
  const transparent = location.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar transparentOnTop={transparent} />
      {/* Spacer for non-transparent layouts */}
      {!transparent && <div className="h-16 md:h-20" />}
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <ProductImageRegistry />
    </div>
  );
}
