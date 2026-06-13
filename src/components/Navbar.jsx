import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:block bg-navy text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+8613812345678" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +86 138 1234 5678
            </a>
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@ssourcingchina.com
            </a>
          </div>
          <span>Serving Global Buyers Since 2012</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-brand-blue rounded flex items-center justify-center text-white font-bold text-lg">S</div>
            <div className="leading-tight">
              <div className="font-bold text-navy text-lg">SSourcing</div>
              <div className="text-brand-blue text-xs font-medium -mt-0.5">CHINA</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand-blue bg-blue-50'
                    : 'text-gray-700 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-md hover:bg-brand-orange-hover transition-colors shadow-sm"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand-blue bg-blue-50'
                    : 'text-gray-700 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-md hover:bg-brand-orange-hover transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}