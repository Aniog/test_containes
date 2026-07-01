import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './lib/CartContext';
import { Toaster } from 'sonner';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const Layout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial scan
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    
    // Scan again if DOM changes (simplified approach)
    const observer = new MutationObserver(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    
    if (containerRef.current) {
        observer.observe(containerRef.current, { childList: true, subtree: true });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <CartProvider>
      <div ref={containerRef} className="min-h-screen flex flex-col bg-velmora-cream">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" />
      </div>
    </CartProvider>
  );
};

export default Layout;
