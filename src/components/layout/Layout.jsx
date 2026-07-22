import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../../strk-img-config.json';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let frameId;
    if (containerRef.current) {
       frameId = window.requestAnimationFrame(() => {
         ImageHelper.loadImages(strkImgConfig, containerRef.current);
       });
    }
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full relative">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}