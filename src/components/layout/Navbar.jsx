import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Telescope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Knowledge Hub', path: '/knowledge' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
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
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-subtle shadow-lg shadow-cosmos/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center group-hover:bg-amber/20 transition-all duration-300">
              <Telescope className="w-4 h-4 text-amber" />
            </div>
            <span className="font-serif text-lg font-light text-star tracking-wide">
              Starry Night
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    isActive ? 'text-amber' : 'text-muted hover:text-star'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-amber transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 text-sm font-medium text-cosmos bg-amber rounded-full hover:bg-amber/90 transition-all duration-300 hover:shadow-lg hover:shadow-amber/20"
            >
              Ask a Question
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-muted hover:text-star transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface/95 backdrop-blur-md border-t border-subtle px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-sm font-medium tracking-wide border-b border-subtle/50 transition-colors duration-200 ${
                  isActive ? 'text-amber' : 'text-muted hover:text-star'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              to="/contact"
              className="block w-full text-center px-5 py-2.5 text-sm font-medium text-cosmos bg-amber rounded-full hover:bg-amber/90 transition-all duration-300"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
