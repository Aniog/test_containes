import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Telescope, Menu, X, Star } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/knowledge', label: 'Knowledge Hub' },
  { path: '/gallery', label: 'Sky Gallery' },
  { path: '/contact', label: 'Contact' },
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
          ? 'bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#1F2937]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center group-hover:border-indigo-400 transition-colors duration-300">
                <Telescope className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>
            <div>
              <span className="text-white font-light text-sm tracking-wide">Starry Night</span>
              <span className="text-amber-400 font-light text-sm"> & Astronomy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/40 text-indigo-300 text-sm hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
            >
              <Star className="w-3.5 h-3.5" />
              Ask a Question
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
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
        <div className="bg-[#0B0F19]/98 backdrop-blur-md border-t border-[#1F2937] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 text-sm tracking-wide border-b border-[#1F2937] last:border-0 transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-amber-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
