import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
  { to: '/submit', label: 'Submit Memory' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080d1a]/95 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors" />
            <div className="absolute inset-1 rounded-full bg-cyan-400/40" />
            <div className="absolute inset-2 rounded-full bg-cyan-300" style={{ boxShadow: '0 0 8px rgba(6,182,212,0.8)' }} />
          </div>
          <span className="font-cinzel text-sm font-bold text-slate-100 tracking-wider">
            MEMORY ARCHIVE
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => {
            const isActive = location.pathname === link.to;
            const isSubmit = link.to === '/submit';
            if (isSubmit) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="ml-3 px-5 py-2 rounded-full bg-cyan-500 text-black text-xs font-semibold uppercase tracking-wider hover:bg-cyan-400 transition-all duration-200"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-400 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-400 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-400 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080d1a]/98 backdrop-blur-md border-t border-slate-800/60 px-4 py-4 space-y-1">
          {NAV_LINKS.map(link => {
            const isActive = location.pathname === link.to;
            const isSubmit = link.to === '/submit';
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                  isSubmit
                    ? 'bg-cyan-500 text-black font-semibold text-center mt-2'
                    : isActive
                    ? 'text-cyan-300 bg-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
