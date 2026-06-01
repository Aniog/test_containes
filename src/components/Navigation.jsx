import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/submit', label: 'Submit Memory' },
];

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-black/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-cosmic-blue/20 group-hover:bg-cosmic-blue/30 transition-colors" />
            <div className="absolute inset-1 rounded-full bg-cosmic-blue/40" />
            <div className="absolute inset-2 rounded-full bg-cosmic-blue animate-pulse-glow" />
          </div>
          <div>
            <div className="font-space font-bold text-star-white text-base leading-none">
              Memory Archive
            </div>
            <div className="text-star-dim text-[10px] font-mono leading-none mt-0.5">
              Interstellar Migration Initiative
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-space ${
                location.pathname === link.to
                  ? 'text-cosmic-blue bg-cosmic-blue/10'
                  : 'text-star-dim hover:text-star-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="text-star-dim text-xs font-mono">
            <span className="text-cosmic-teal">●</span> Archive Online
          </div>
          <Link
            to="/submit"
            className="bg-cosmic-blue/10 border border-cosmic-blue/40 text-cosmic-blue hover:bg-cosmic-blue/20 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-space"
          >
            + Add Memory
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-star-dim hover:text-star-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-space-navy/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 font-space ${
                location.pathname === link.to
                  ? 'text-cosmic-blue bg-cosmic-blue/10'
                  : 'text-star-dim hover:text-star-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
