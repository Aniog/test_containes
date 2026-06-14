import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'white' : 'white',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            S
          </div>
          <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)' }}>
            SSourcing<span style={{ color: 'var(--secondary)' }}>China</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: isActive(link.path) ? 'var(--secondary)' : 'var(--text-primary)',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '15px',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'}
              onMouseLeave={(e) => e.target.style.color = isActive(link.path) ? 'var(--secondary)' : 'var(--text-primary)'}
            >
              {link.label}
              {isActive(link.path) && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--secondary)',
                  borderRadius: '1px',
                }} />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          padding: '24px',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: isActive(link.path) ? 'var(--secondary)' : 'var(--text-primary)',
                  fontWeight: isActive(link.path) ? '600' : '500',
                  fontSize: '16px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ marginTop: '16px', textAlign: 'center' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
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