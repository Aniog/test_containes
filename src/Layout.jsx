import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json'; // We will create this

export default function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();

    useEffect(() => {
    // A simple hack to re-run on location change if needed, handled mostly by components themselves, but a global scan helps.
    // In a real app we'd trigger this more deliberately.
    const frameId = window.requestAnimationFrame(() => {
        if(containerRef.current) {
            try {
                ImageHelper.loadImages(strkImgConfig, containerRef.current);
            } catch (e) {
                // ignore
            }
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search]);

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}