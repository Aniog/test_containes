import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0A2540] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <span className="font-semibold text-xl text-[#0A2540]">SSourcing China</span>
          </Link>

          <nav className="desktop-nav flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn btn-primary hidden md:inline-flex">
              Get a Free Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu p-2 text-[#475569]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-menu border-t border-[#E2E8F0] py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link block py-2 ${isActive(link.href) ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
