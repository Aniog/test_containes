import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Telescope, Menu, X, Star } from 'lucide-react';

const navLinks = [
  { path: '/',          label: 'Home' },
  { path: '/knowledge', label: 'Knowledge Hub' },
  { path: '/gallery',   label: 'Gallery' },
  { path: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cosmos-void/90 backdrop-blur-xl border-b border-cosmos-border/60 shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-center group-hover:bg-amber-glow/20 group-hover:border-amber-glow/60 transition-all duration-300">
                <Telescope className="w-4 h-4 text-amber-glow" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-glow animate-pulse-slow" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-star-white text-sm tracking-wide">
                Starry Night
              </span>
              <span className="text-xs text-cosmos-subtle font-sans tracking-widest uppercase">
                Physics of the Cosmos
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-4 py-2 text-sm font-medium font-sans rounded-lg transition-all duration-300 group ${
                    active
                      ? 'text-amber-glow'
                      : 'text-cosmos-text hover:text-star-white'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-px bg-amber-glow transition-all duration-300 ${
                      active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-glow/10 hover:bg-amber-glow/20 border border-amber-glow/30 hover:border-amber-glow/60 text-amber-glow text-sm font-semibold rounded-lg transition-all duration-300"
            >
              <Star className="w-3.5 h-3.5" />
              Ask a Question
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-cosmos-border text-cosmos-text hover:text-star-white hover:border-cosmos-muted transition-all duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cosmos-void/95 backdrop-blur-xl border-t border-cosmos-border/50 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`px-4 py-3 rounded-lg text-sm font-medium font-sans transition-all duration-200 ${
                  active
                    ? 'bg-amber-glow/10 text-amber-glow border border-amber-glow/20'
                    : 'text-cosmos-text hover:bg-cosmos-surface hover:text-star-white'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 px-4 py-3 bg-amber-glow/10 border border-amber-glow/30 text-amber-glow text-sm font-semibold rounded-lg text-center"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </nav>
  );
}
