import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? '#FFFFFF' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#1E3A5F', 
            borderRadius: '8px',
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
            color: '#1E3A5F',
            display: 'none'
          }}>
            SSourcing China
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: location.pathname === link.path ? '#1E3A5F' : '#4A5568',
                borderBottom: location.pathname === link.path ? '2px solid #C9A227' : 'none',
                paddingBottom: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-cta">
          <Link
            to="/contact"
            style={{
              backgroundColor: '#C9A227',
              color: '#1E3A5F',
              padding: '12px 24px',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.2s ease',
            }}
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '8px',
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '24px',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '16px',
                fontWeight: '500',
                color: location.pathname === link.path ? '#1E3A5F' : '#4A5568',
                borderBottom: '1px solid #E2E8F0',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: 'block',
              marginTop: '16px',
              backgroundColor: '#C9A227',
              color: '#1E3A5F',
              padding: '14px 24px',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            Get a Free Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;