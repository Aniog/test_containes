import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products', label: 'Products' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-slate-900">
              SSourcing<span className="text-slate-500">China</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+8613800000000" className="flex items-center text-sm text-slate-600 hover:text-slate-900">
              <Phone className="w-4 h-4 mr-1.5" />
              +86 138 0000 0000
            </a>
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 text-base font-medium ${
                  isActive(link.to) ? 'text-slate-900' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a href="tel:+8613800000000" className="flex items-center text-sm text-slate-600">
                <Phone className="w-4 h-4 mr-2" />
                +86 138 0000 0000
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center text-sm text-slate-600">
                <Mail className="w-4 h-4 mr-2" />
                info@ssourcingchina.com
              </a>
            </div>
            <Link
              to="/contact"
              className="block w-full bg-slate-900 text-white text-center px-5 py-3 rounded-lg text-sm font-medium"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
