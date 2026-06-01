import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'Mission' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-space-black/90 backdrop-blur-md border-b border-slate-800/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 relative">
            <div className="absolute inset-0 rounded-full border border-nebula-blue/60 group-hover:border-nebula-blue transition-colors duration-300" />
            <div className="absolute inset-1.5 rounded-full bg-nebula-blue/30 group-hover:bg-nebula-blue/50 transition-colors duration-300" />
            <div className="absolute inset-2.5 rounded-full bg-nebula-blue" />
          </div>
          <span className="font-display text-lg text-white font-light tracking-wide">
            Memory Archive
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm uppercase tracking-widest transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-nebula-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/explore"
            className="px-5 py-2 rounded-full border border-nebula-blue/50 text-nebula-blue text-xs uppercase tracking-widest hover:bg-nebula-blue hover:text-white transition-all duration-300"
          >
            Contribute Memory
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-black/95 backdrop-blur-md border-b border-slate-800 px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm uppercase tracking-widest py-2 transition-colors duration-200 ${
                location.pathname === link.to ? 'text-nebula-blue' : 'text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="mt-2 px-5 py-3 rounded-full border border-nebula-blue/50 text-nebula-blue text-xs uppercase tracking-widest text-center"
          >
            Contribute Memory
          </Link>
        </div>
      )}
    </nav>
  );
}
