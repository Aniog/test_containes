import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import CartDrawer from '@/components/common/CartDrawer';
import { Toaster } from 'sonner';

const Layout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial load
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    
    // Scan for new images when something changes in the DOM
    const observer = new MutationObserver(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    
    if (containerRef.current) {
        observer.observe(containerRef.current, { childList: true, subtree: true });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-velmora-base" ref={containerRef}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default Layout;
