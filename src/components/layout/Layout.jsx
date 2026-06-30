import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Outlet, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function Layout() {
  const mainRef = useRef(null);
  const location = useLocation();

  // Load stock images via SDK when available
  useEffect(() => {
    let cleanup;
    const load = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const config = (await import('@/strk-img-config.json')).default;
        if (mainRef.current && config && Object.keys(config).length > 0) {
          cleanup = ImageHelper.loadImages(config, mainRef.current);
        }
      } catch {
        // SDK image loading not available — placeholder images will be used
      }
    };
    load();
    return () => { if (typeof cleanup === 'function') cleanup(); };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main ref={mainRef} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
