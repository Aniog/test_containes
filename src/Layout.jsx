import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import strkImgConfig from './strk-img-config.json';
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scan for images on route change and when the DOM is stable
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-inter" ref={containerRef}>
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
