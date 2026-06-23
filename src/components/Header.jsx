import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="container">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'var(--primary)', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>S</span>
            </div>
            <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)' }}>
              SSourcing<span style={{ color: 'var(--secondary)' }}>China</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: isActive(link.path) ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: isActive(link.path) ? '600' : '500',
                  fontSize: '15px',
                  padding: '8px 0',
                  borderBottom: isActive(link.path) ? '2px solid var(--primary)' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                className="hover:text-primary-color"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn btn-cta">
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: isActive(link.path) ? 'var(--primary)' : 'var(--text-secondary)',
                    fontWeight: isActive(link.path) ? '600' : '500',
                    fontSize: '16px',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-cta mt-4 text-center"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
