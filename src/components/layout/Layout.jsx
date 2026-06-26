import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'sonner';

import strkImgConfig from '@/strk-img-config.json';

const Layout = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Basic image loading trigger for the entire app
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-brand-blue/10 selection:text-brand-blue" ref={containerRef}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
