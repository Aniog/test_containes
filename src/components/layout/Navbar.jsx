import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
  { to: '/contribute', label: 'Contribute' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmos/90 backdrop-blur-md border-b border-stardust/30 shadow-lg shadow-void/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-aurora/50 flex items-center justify-center bg-aurora/10 group-hover:bg-aurora/20 transition-colors">
            <span className="text-aurora-light text-xs">✦</span>
          </div>
          <span className="font-cinzel text-sm tracking-widest text-starlight group-hover:text-aurora-light transition-colors">
            Memory Archive
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-aurora-light bg-aurora/10'
                    : 'text-mist hover:text-starlight hover:bg-stardust/30'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            to="/contribute"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-aurora hover:bg-aurora/80 text-white text-sm font-medium tracking-wide transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Add Memory
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-stardust/30 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-px bg-starlight transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-5 h-px bg-starlight transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-px bg-starlight transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cosmos/95 backdrop-blur-md border-b border-stardust/30 px-6 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-all ${
                  isActive
                    ? 'text-aurora-light bg-aurora/10'
                    : 'text-mist hover:text-starlight hover:bg-stardust/30'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contribute"
            className="block mt-3 px-4 py-3 rounded-full bg-aurora text-white text-sm font-medium text-center"
          >
            Add Memory
          </Link>
        </div>
      )}
    </nav>
  );
}
