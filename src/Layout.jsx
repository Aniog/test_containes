import { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const NAV_ITEMS = [
  { to: '/', label: 'The Roots' },
  { to: '/micro-forest', label: 'Micro-Forest' },
  { to: '/outlook', label: 'The Outlook' },
];

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen bg-canopy-deep font-body text-mist">
      <header className="fixed top-0 left-0 right-0 z-50 bg-canopy-deep/90 backdrop-blur-sm border-b border-canopy-moss/30">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NavLink
            to="/"
            className="font-heading text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase text-mist-pale hover:text-white transition-colors duration-500"
          >
            Ancient Canopy
          </NavLink>

          <ul className="flex gap-6 md:gap-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `font-heading text-base md:text-lg tracking-widest uppercase transition-colors duration-500 border-b border-rugged pb-1 ${
                      isActive
                        ? 'border-mist/50 text-mist-pale'
                        : 'border-transparent text-mist hover:text-mist-light hover:border-mist/30'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-32 md:pt-36">{children}</main>

      <footer className="border-t border-canopy-moss/30 py-12 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-heading text-mist-heavy text-sm tracking-[0.2em] uppercase">
            Ancient Canopy
          </p>
          <p className="text-mist-heavy/60 text-xs mt-2 italic">
            The old growth remembers.
          </p>
        </div>
      </footer>
    </div>
  );
}