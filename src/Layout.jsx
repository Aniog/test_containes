import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden font-sans text-slate-900 bg-white" ref={containerRef}>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
