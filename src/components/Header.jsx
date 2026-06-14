import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products', label: 'Products' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link block py-2 ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="btn-primary mt-3 w-full justify-center"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;