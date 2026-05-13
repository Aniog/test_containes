import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Telescope, Menu, X, Star } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Knowledge Hub', path: '/knowledge' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-950/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Telescope className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          </div>
          <span className="font-serif text-lg font-light tracking-wide text-star-silver group-hover:text-amber-400 transition-colors">
            Starry Night
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative text-sm tracking-wide transition-colors duration-200 pb-0.5 ${
                  isActive(link.path)
                    ? 'text-amber-400'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-amber-400 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-space-950 bg-amber-400 hover:bg-amber-300 px-5 py-2 rounded-full transition-all duration-200"
          >
            <Star className="w-3 h-3" />
            Ask a Question
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-space-950/95 backdrop-blur-md border-b border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-wide transition-colors ${
                isActive(link.path) ? 'text-amber-400' : 'text-slate-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 text-center text-xs font-mono tracking-widest uppercase text-space-950 bg-amber-400 hover:bg-amber-300 px-5 py-2.5 rounded-full transition-all duration-200"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </header>
  );
}
