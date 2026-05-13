import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Telescope, Menu, X, Star } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/knowledge', label: 'Knowledge Hub' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0F19]/95 backdrop-blur-md border-b border-gray-800/60 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Telescope className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-twinkle" />
          </div>
          <span className="text-gray-50 font-light text-lg tracking-wide hidden sm:block">
            Starry Night
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm tracking-wide transition-all duration-200 relative group ${
                location.pathname === path
                  ? 'text-amber-400'
                  : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300 ${
                  location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 rounded-full border border-amber-400/50 text-amber-400 text-sm tracking-wide hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5" />
              Feedback
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-gray-50 transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0B0F19]/98 backdrop-blur-md border-b border-gray-800/60`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm tracking-wide py-2 border-b border-gray-800/40 transition-colors ${
                location.pathname === path
                  ? 'text-amber-400'
                  : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
