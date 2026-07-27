import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
            backgroundColor: 'var(--color-primary)', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '18px',
            fontFamily: 'var(--font-heading)'
          }}>
            S
          </div>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: '700', 
            fontSize: '20px',
            color: isScrolled ? 'var(--color-primary)' : 'white'
          }}>
            SSourcing<span style={{ color: 'var(--color-accent)' }}>China</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: isScrolled || location.pathname !== '/' ? 'var(--color-text-primary)' : 'white',
                fontWeight: isActive(link.path) ? '600' : '500',
                fontSize: '15px',
                position: 'relative',
                padding: '8px 0',
              }}
            >
              {link.name}
              {isActive(link.path) && (
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: '2px'
                }} />
              )}
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
            <X size={24} color={isScrolled ? '#1E293B' : '#FFFFFF'} />
          ) : (
            <Menu size={24} color={isScrolled ? '#1E293B' : '#FFFFFF'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '0',
          right: '0',
          backgroundColor: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          padding: '24px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: 'var(--color-text-primary)',
                fontWeight: isActive(link.path) ? '600' : '500',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {link.name}
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

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Supplier Verification', path: '/services' },
      { name: 'Quality Inspection', path: '/services' },
      { name: 'Production Follow-up', path: '/services' },
      { name: 'Shipping & Logistics', path: '/services' },
    ],
    company: [
      { name: 'About Us', path: '/blog' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Contact', path: '/contact' },
    ],
    products: [
      { name: 'Electronics', path: '/products' },
      { name: 'Textiles & Apparel', path: '/products' },
      { name: 'Machinery', path: '/products' },
      { name: 'Consumer Goods', path: '/products' },
    ],
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', paddingTop: '64px' }}>
      <div className="container">
        <div className="grid-4" style={{ gap: '48px', paddingBottom: '48px' }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'var(--color-accent)', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '18px',
                fontFamily: 'var(--font-heading)'
              }}>
                S
              </div>
              <span style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: '700', 
                fontSize: '20px',
              }}>
                SSourcing<span style={{ color: 'var(--color-accent)' }}>China</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ 
                width: '36px', 
                height: '36px', 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}>
                in
              </span>
              <span style={{ 
                width: '36px', 
                height: '36px', 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}>
                tw
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '16px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.services.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: '#94A3B8', fontSize: '14px' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: '#94A3B8', fontSize: '14px' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '16px' }}>Products We Source</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.products.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: '#94A3B8', fontSize: '14px' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ color: '#64748B', fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="#" style={{ color: '#64748B', fontSize: '14px' }}>Privacy Policy</Link>
            <Link to="#" style={{ color: '#64748B', fontSize: '14px' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;