import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">SS</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-text tracking-tight">SSourcing</span>
              <span className="text-[10px] text-text-muted font-medium -mt-1 tracking-wider uppercase">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors no-underline ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors no-underline shadow-sm"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-alt'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border mt-3">
              <Link
                to="/contact"
                className="block text-center px-5 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors no-underline"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
