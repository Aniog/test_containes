import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/products', label: 'Products' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'var(--color-primary)', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '18px'
            }}>
              S
            </div>
            <span style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: 'var(--color-primary)',
              letterSpacing: '-0.5px'
            }}>
              SSourcing<span style={{ color: 'var(--color-accent)' }}>China</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: isActive(link.path) ? 'var(--color-accent)' : 'var(--color-text-primary)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                position: 'relative',
              }}
            >
              {link.label}
              {isActive(link.path) && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: '1px'
                }} />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/contact" className="btn btn-primary">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '8px',
            cursor: 'pointer'
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: isActive(link.path) ? 'var(--color-accent)' : 'var(--color-text-primary)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary" 
            style={{ marginTop: '8px', textAlign: 'center' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;