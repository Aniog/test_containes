import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this exists or will exist

export default function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Attempt to load images on mount
    try {
        if(strkImgConfig) {
             const frameId = window.requestAnimationFrame(() => {
                 ImageHelper.loadImages(strkImgConfig, document.body);
             });
             return () => window.cancelAnimationFrame(frameId);
        }
    } catch(e) {
        console.warn("Could not init image helper.", e)
    }
  }, [location.pathname]);

  
  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[var(--color-brand-sand)]">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
