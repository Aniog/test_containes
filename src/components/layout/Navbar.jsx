import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Microscope, Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Microscope className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-slate-100 font-semibold text-sm tracking-widest uppercase">
                MicroCosmos
              </span>
              <span className="text-emerald-400 font-mono text-[9px] tracking-widest uppercase opacity-70">
                The Microscopic World
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-widest uppercase font-medium transition-all duration-300 relative group ${
                    isActive
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-emerald-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 border border-emerald-500/40 text-emerald-400 text-xs tracking-widest uppercase font-medium hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
            >
              Submit Report
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-emerald-400 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#090D16]/98 backdrop-blur-md border-t border-slate-800/60 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-widest uppercase font-medium transition-colors ${
                  isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 px-5 py-2.5 border border-emerald-500/40 text-emerald-400 text-xs tracking-widest uppercase font-medium text-center hover:bg-emerald-500/10 transition-all duration-300"
          >
            Submit Report
          </Link>
        </div>
      </div>
    </nav>
  );
}
