import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
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

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container">
        <nav className="flex-between py-4" style={{ height: '72px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
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
              color: '#1E3A5F',
              display: 'none'
            }} className="md:block">
              SSourcing China
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: isActive(link.path) ? '#F97316' : '#475569',
                  fontWeight: isActive(link.path) ? '600' : '500',
                  fontSize: '15px',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.target.style.color = '#1E3A5F'}
                onMouseLeave={(e) => e.target.style.color = isActive(link.path) ? '#F97316' : '#475569'}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: '#E2E8F0' }}>
          <div className="container py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: isActive(link.path) ? '#F97316' : '#1E293B',
                  fontWeight: isActive(link.path) ? '600' : '500',
                  fontSize: '16px',
                  textDecoration: 'none',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4">
              <Link 
                to="/contact" 
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
    ],
    services: [
      { name: 'Supplier Verification', path: '/services' },
      { name: 'Quality Inspection', path: '/services' },
      { name: 'Production Follow-up', path: '/services' },
      { name: 'Shipping & Logistics', path: '/services' },
    ],
    resources: [
      { name: 'FAQ', path: '/#faq' },
      { name: 'Sourcing Guide', path: '/blog' },
      { name: 'China Trade Insights', path: '/blog' },
    ]
  };

  return (
    <footer style={{ backgroundColor: '#1E293B', color: 'white', paddingTop: '64px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ paddingBottom: '48px' }}>
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
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
              <span style={{ fontSize: '18px', fontWeight: '700' }}>
                SSourcing China
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: '#94A3B8' }}>LinkedIn</a>
              <a href="#" style={{ color: '#94A3B8' }}>Twitter</a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '16px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.services.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '16px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#94A3B8', fontSize: '14px' }}>
              <li style={{ marginBottom: '12px' }}>Email: info@ssourcing.cn</li>
              <li style={{ marginBottom: '12px' }}>Phone: +86 571 1234 5678</li>
              <li style={{ marginBottom: '12px' }}>Address: Hangzhou, China</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid #334155', 
          padding: '24px 0',
          textAlign: 'center',
          color: '#64748B',
          fontSize: '14px'
        }}>
          &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <main style={{ flex: 1, paddingTop: '72px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
