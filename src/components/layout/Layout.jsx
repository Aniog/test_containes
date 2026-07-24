import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '@/components/ui/CartDrawer';

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname]);

  // (re)scan for strk images whenever the route changes
  useEffect(() => {
    if (!containerRef.current) return undefined;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-ivory text-ink">
      <Header />
      <main className="flex-1 pt-16 md:pt-[7.5rem]">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
