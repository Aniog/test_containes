import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname]);

  // Scan for tagged images on every route change
  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname, location.search]);

  // Hero is full bleed only on home, so make navbar transparent only there
  const transparentNav = location.pathname === '/';

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory text-charcoal flex flex-col">
      <Navbar transparentOnTop={transparentNav} />
      <main className={transparentNav ? '' : 'pt-16 md:pt-20'}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
