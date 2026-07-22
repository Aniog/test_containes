import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/Cart/CartDrawer';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Only works when sdk is properly setup, wrapped in a try/catch just in case
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.log('Image setup skipped during dev', e);
    }
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}