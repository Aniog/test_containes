import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Specimens', path: '/specimens' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Lab Notes', path: '/contact' },
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
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-subtle shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-full border border-bio-green/50 flex items-center justify-center group-hover:border-bio-green transition-colors duration-300">
                <Microscope className="w-4 h-4 text-bio-green" />
              </div>
              <div className="absolute inset-0 rounded-full bg-bio-green/10 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <div>
              <span className="font-grotesk font-bold text-slate-100 text-lg tracking-tight">
                Micro<span className="text-bio-green">Cosmos</span>
              </span>
              <div className="font-mono text-[9px] text-slate-500 tracking-widest uppercase leading-none">
                The Microscopic World
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-grotesk text-sm font-medium transition-colors duration-200 rounded-lg group ${
                    isActive
                      ? 'text-bio-green'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-bio-green" />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-bio-green/10 border border-bio-green/30 text-bio-green font-grotesk text-sm font-semibold rounded-lg hover:bg-bio-green/20 hover:border-bio-green/60 transition-all duration-200"
            >
              Submit Observation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-b border-subtle">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 font-grotesk text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-bio-green bg-bio-green/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-2 px-4 py-3 bg-bio-green/10 border border-bio-green/30 text-bio-green font-grotesk text-sm font-semibold rounded-lg text-center"
            >
              Submit Observation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
