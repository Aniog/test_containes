import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold flex items-center justify-center">
              <span className="text-white font-extrabold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-tight transition-colors duration-300 ${
                scrolled ? 'text-navy' : 'text-white'
              }`}>
                ARTITECT
              </span>
              <span className={`text-[10px] font-medium tracking-[0.25em] uppercase leading-tight transition-colors duration-300 ${
                scrolled ? 'text-gold' : 'text-gold-light'
              }`}>
                MACHINERY
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.to
                    ? scrolled ? 'text-gold' : 'text-gold-light'
                    : scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-light text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
            >
              Get Quote
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-warm-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-gold bg-gold-50'
                    : 'text-navy hover:bg-navy-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center bg-gold hover:bg-gold-light text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors mt-3"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
