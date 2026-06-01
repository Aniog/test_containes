import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/archive', label: 'Archive' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
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
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(3,4,10,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-aurora/20 group-hover:bg-aurora/30 transition-colors" />
            <div className="absolute inset-1 rounded-full bg-aurora/40" />
            <div className="absolute inset-2 rounded-full bg-aurora animate-pulse-slow" />
          </div>
          <span className="font-display font-bold text-starlight text-lg tracking-wide">
            MNEMOSYNE
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-aurora-glow bg-aurora/10'
                    : 'text-mist hover:text-starlight hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contribute"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora/20 border border-aurora/30 text-aurora-glow text-sm font-medium hover:bg-aurora/30 transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
            Contribute
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-starlight transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-starlight transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-starlight transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/8 px-6 py-4 space-y-1"
          style={{ background: 'rgba(3,4,10,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'text-aurora-glow bg-aurora/10'
                    : 'text-mist hover:text-starlight hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contribute"
            className="block px-4 py-3 rounded-xl text-sm font-medium text-aurora-glow bg-aurora/10 mt-2"
          >
            Contribute a Memory
          </Link>
        </div>
      )}
    </nav>
  );
}
