import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = () => {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [location.pathname]);

  return (
    <>
      <div ref={containerRef} className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartDrawer />
    </>
  );
};

export default Layout;