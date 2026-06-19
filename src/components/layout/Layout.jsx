import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Outlet } from 'react-router-dom';

import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Layout() {
  const containerRef = useRef(null)

  useEffect(() => {
    try {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch(e) {
      console.log('Image helper not loaded properly yet', e);
    }
  }, []) // Empty dependency array means it only runs on mount

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <Navbar />
      <CartDrawer />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}