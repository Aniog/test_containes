import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Microscope, Menu, X, FlaskConical } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/specimens', label: 'Specimens' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Lab Notes' },
];

const Navbar = () => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-border-dim shadow-[0_1px_0_rgba(16,185,129,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-bio-green/10 group-hover:bg-bio-green/20 transition-colors duration-300" />
            <Microscope className="w-4 h-4 text-bio-green relative z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-text-primary font-semibold text-sm tracking-wide">MicroCosmos</span>
            <span className="text-text-muted font-mono text-[10px] tracking-widest uppercase">The Microscopic World</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                  isActive
                    ? 'text-bio-green'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-bio-green/8" />
                )}
                <span className="relative">{label}</span>
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-4 flex items-center gap-2 px-4 py-2 rounded-full border border-bio-green/40 text-bio-green text-sm font-medium hover:bg-bio-green/10 transition-all duration-200"
          >
            <FlaskConical className="w-3.5 h-3.5" />
            Submit Report
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border-dim text-text-secondary hover:text-text-primary hover:border-bio-green/30 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-b border-border-dim">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-bio-green bg-bio-green/8'
                      : 'text-text-secondary hover:text-text-primary hover:bg-charcoal-light'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
