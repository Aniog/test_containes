import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/explore', label: 'Explore' },
  { to: '/explore/era', label: 'By Era' },
  { to: '/explore/emotion', label: 'By Emotion' },
  { to: '/explore/location', label: 'By Location' },
  { to: '/submit', label: 'Contribute' },
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
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-navy/90 backdrop-blur-md border-b border-slate-700/40 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7">
            <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
              <circle cx="14" cy="14" r="2" fill="#4f8ef7" />
              <circle cx="6" cy="8" r="1.5" fill="#a78bfa" />
              <circle cx="22" cy="6" r="1" fill="#2dd4bf" />
              <circle cx="24" cy="20" r="1.5" fill="#f5c842" />
              <circle cx="4" cy="22" r="1" fill="#e879a0" />
              <line x1="14" y1="14" x2="6" y2="8" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
              <line x1="14" y1="14" x2="22" y2="6" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
              <line x1="14" y1="14" x2="24" y2="20" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
              <line x1="14" y1="14" x2="4" y2="22" stroke="#4f8ef7" strokeOpacity="0.5" strokeWidth="0.8" />
              <line x1="6" y1="8" x2="22" y2="6" stroke="#a78bfa" strokeOpacity="0.3" strokeWidth="0.6" />
            </svg>
          </div>
          <span className="font-cinzel font-bold text-white text-base tracking-wide group-hover:text-nebula-blue transition-colors">
            Memory Archive
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to || location.pathname.startsWith(link.to + '/');
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-white bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/submit"
            className="bg-nebula-blue hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-md shadow-nebula-blue/20"
          >
            Add Memory
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-navy/95 backdrop-blur-md border-t border-slate-700/40 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/submit"
            className="mt-2 bg-nebula-blue text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
          >
            Add Memory
          </Link>
        </div>
      )}
    </nav>
  );
}
