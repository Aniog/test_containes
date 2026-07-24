import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function Layout() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      <CartDrawer />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
