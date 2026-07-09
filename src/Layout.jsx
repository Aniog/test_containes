import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import CartDrawer from '@/components/common/CartDrawer';
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, children]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans selection:bg-accent/20">
      <Nav />
      <CartDrawer />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
