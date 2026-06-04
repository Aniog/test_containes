import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from './components/Navbar';

export default function Layout() {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-charcoal/10 py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-serif text-sm text-charcoal-muted italic">
            MicroCosmos &mdash; The Microscopic World
          </p>
          <p className="font-sans text-xs text-charcoal-muted mt-1">
            An educational platform for the study of microscopic life, est. 2026
          </p>
        </div>
      </footer>
    </div>
  );
}