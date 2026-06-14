import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = ({ onQuoteClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-slate-900'
        : 'text-slate-600 hover:text-slate-900'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
            <span className="text-white text-sm font-semibold">SS</span>
          </div>
          <span className="font-semibold text-xl tracking-tight text-slate-900">SSourcing China</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onQuoteClick}
            className="px-5 py-2.5 text-sm font-medium bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
          >
            Get a Free Sourcing Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-600"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onQuoteClick();
              }}
              className="mt-2 w-full px-5 py-2.5 text-sm font-medium bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
            >
              Get a Free Sourcing Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
