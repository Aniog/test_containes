import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmos-black/95 backdrop-blur-md border-b border-cyan-900/40 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Microscope className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 blur-sm bg-cyan-400/30 rounded-full group-hover:bg-cyan-400/50 transition-all" />
            </div>
            <span className="font-heading font-bold text-xl text-slate-50 group-hover:text-cyan-400 transition-colors">
              Micro<span className="text-cyan-400">Cosmos</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-cyan-400 text-cosmos-black font-semibold text-sm px-5 py-2 rounded-full hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cosmos-navy/95 backdrop-blur-md border-t border-cyan-900/30 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium py-2 transition-colors ${
                location.pathname === link.path
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="bg-cyan-400 text-cosmos-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-cyan-300 transition-all text-center mt-2"
          >
            Start Exploring
          </Link>
        </div>
      </div>
    </nav>
  );
}
