import React, { useRef, useEffect } from 'react';
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

  return (
    <div ref={containerRef} className="min-h-screen bg-canopy-deep font-body text-mist">
      <header className="fixed top-0 left-0 right-0 z-50 bg-canopy-deep/90 backdrop-blur-sm border-b border-mist-heavy/20">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <NavLink
            to="/"
            className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-mist-pale hover:text-white transition-colors duration-500"
          >
            Ancient Canopy
          </NavLink>

          <ul className="hidden md:flex gap-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `font-heading text-lg tracking-wide transition-colors duration-500 border-b-2 pb-1 ${
                      isActive
                        ? 'border-mist text-mist-pale'
                        : 'border-transparent text-mist hover:text-mist-light hover:border-mist/40'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile nav */}
          <div className="flex md:hidden gap-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `font-heading text-sm tracking-wide transition-colors duration-500 ${
                    isActive ? 'text-mist-pale underline' : 'text-mist'
                  }`
                }
              >
                {item.label.split(' ')[0]}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="pt-20">{children}</main>

      <footer className="border-t border-mist-heavy/20 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-heading text-mist-heavy text-sm tracking-widest uppercase">
            Ancient Canopy
          </p>
          <p className="text-mist-heavy/60 text-xs mt-2 italic">
            Witness the old growth. Feel the weight of centuries.
          </p>
        </div>
      </footer>
    </div>
  );
}