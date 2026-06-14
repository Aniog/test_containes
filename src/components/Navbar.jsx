import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          ARTITECT <span>MACHINERY</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary navbar-cta">
            Request Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="navbar-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn btn-primary"
          onClick={handleLinkClick}
          style={{ marginTop: '0.5rem' }}
        >
          Request Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;