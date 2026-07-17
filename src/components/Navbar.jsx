import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
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
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-steel-navy/98 shadow-xl shadow-black/20' : 'bg-steel-navy/90'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-copper-gold rounded-lg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"/>
                <path d="M7 3v18M17 3v18" strokeLinecap="round" strokeOpacity="0.6"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-white font-serif font-bold text-lg tracking-wide group-hover:text-copper-gold transition-colors">
                ARTITECT
              </span>
              <span className="block text-mid-gray text-xs tracking-widest uppercase font-sans">
                MACHINERY
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-copper-gold'
                    : 'text-white/80 hover:text-copper-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-copper-gold hover:bg-light-gold text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 tracking-wide"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-steel-navy border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 border-b border-white/10 transition-colors ${
                  location.pathname === link.path
                    ? 'text-copper-gold'
                    : 'text-white/80 hover:text-copper-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 bg-copper-gold hover:bg-light-gold text-white text-sm font-semibold px-6 py-3 rounded-full text-center transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
