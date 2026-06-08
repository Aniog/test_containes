import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-space-black/90 backdrop-blur-md shadow-[0_1px_0_rgba(139,92,246,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center group-hover:bg-violet-500/30 transition-all">
            <div className="w-3 h-3 rounded-full bg-violet-400 animate-pulse-slow" />
          </div>
          <span className="font-display font-bold text-lg text-slate-50 tracking-tight">
            Micro<span className="text-violet-400">Cosmos</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-violet-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/explore"
            className="bg-violet-500 hover:bg-violet-400 text-black font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200"
          >
            Start Exploring
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-black/95 backdrop-blur-md border-t border-violet-900/30 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium py-1 transition-colors ${
                location.pathname === link.path ? 'text-violet-400' : 'text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="mt-2 bg-violet-500 hover:bg-violet-400 text-black font-semibold text-sm px-5 py-2.5 rounded-full text-center transition-all"
          >
            Start Exploring
          </Link>
        </div>
      )}
    </nav>
  );
}
