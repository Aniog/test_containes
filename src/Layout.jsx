import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search]);

  return (
    <div ref={containerRef} className="min-h-screen bg-surface">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
