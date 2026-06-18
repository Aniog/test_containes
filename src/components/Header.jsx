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
        backgroundColor: isScrolled ? '#FFFFFF' : 'transparent',
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#E67E22', 
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: '700',
            fontSize: '18px'
          }}>
            S
          </div>
          <span style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            color: isScrolled ? '#1E3A5F' : '#FFFFFF' 
          }}>
            SSourcing<span style={{ color: '#E67E22' }}>China</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: isScrolled ? (isActive(link.path) ? '#E67E22' : '#1E293B') : (isActive(link.path) ? '#E67E22' : '#FFFFFF'),
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '15px',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="desktop-nav">
          <Link to="/contact" className="btn btn-primary">
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
        >
          {isMobileMenuOpen ? (
            <X size={24} color={isScrolled ? '#1E3A5F' : '#FFFFFF'} />
          ) : (
            <Menu size={24} color={isScrolled ? '#1E3A5F' : '#FFFFFF'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            padding: '24px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: isActive(link.path) ? '#E67E22' : '#1E293B',
                fontWeight: isActive(link.path) ? '600' : '500',
                borderBottom: '1px solid #E2E8F0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '16px', width: '100%' }}
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
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;