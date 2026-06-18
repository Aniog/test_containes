import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout({ children, transparentNav = false }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-porcelain text-espresso">
      <Nav transparentOnTop={transparentNav} />
      <main className={transparentNav ? '' : 'pt-16 md:pt-20'}>
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
