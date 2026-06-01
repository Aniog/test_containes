import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navigation from './components/Navigation';

export default function Layout() {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cinema-black text-cinema-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-cinema-surface py-10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-gold text-sm tracking-[0.2em] uppercase">
            Cinematography Archive
          </span>
          <span className="font-body text-cinema-muted text-xs tracking-[0.2em] uppercase">
            © 2026 — All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
