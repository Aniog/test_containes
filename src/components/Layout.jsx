import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';

const LayoutContent = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Sticky Navigation */}
      <nav style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '50',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: isScrolled ? 'white' : 'transparent',
        color: isScrolled ? '#1a1a1a' : 'white',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
      }}>
        {/* Left: Logo */}
        <Link to="/" style={{
          fontFamily: 'serif',
          fontSize: '28px',
          letterSpacing: '3px',
          textDecoration: 'none',
          color: 'inherit'
        }}>
          VELMORA
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div style={{ display: 'flex', gap: '40px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>Shop</Link>
          <Link to="/collections" style={{ textDecoration: 'none', color: 'inherit' }}>Collections</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          <Link to="/journal" style={{ textDecoration: 'none', color: 'inherit' }}>Journal</Link>
        </div>

        {/* Right: Search + Cart Icons */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: '20px' }}>
            🔍
          </button>
          <button 
            onClick={() => setIsCartOpen(true)} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: '20px', position: 'relative' }}
          >
            🛒
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#d4a574',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: '24px' }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'white',
          zIndex: '40',
          padding: '100px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '24px',
                textDecoration: 'none',
                color: '#1a1a1a',
                fontFamily: 'serif',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main style={{ marginTop: '0' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '80px 40px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Footer Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '48px' }}>
            {/* Column 1: Logo + Description */}
            <div>
              <h3 style={{ fontFamily: 'serif', fontSize: '24px', letterSpacing: '2px', marginBottom: '16px' }}>VELMORA</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6' }}>
                Demi-fine gold jewelry crafted for everyday elegance. Each piece is thoughtfully designed to celebrate life's precious moments.
              </p>
            </div>

            {/* Column 2: Shop */}
            <div>
              <h4 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Shop</h4>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {['Earrings', 'Necklaces', 'Huggies', 'Bestsellers', 'New Arrivals'].map((item) => (
                  <li key={item} style={{ marginBottom: '8px' }}>
                    <Link to="/shop" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Help */}
            <div>
              <h4 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Help</h4>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map((item) => (
                  <li key={item} style={{ marginBottom: '8px' }}>
                    <Link to="/help" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {['About Us', 'Our Story', 'Sustainability', 'Press', 'Careers'].map((item) => (
                  <li key={item} style={{ marginBottom: '8px' }}>
                    <Link to="/company" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Icons + Social Links */}
          <div style={{ borderTop: '1px solid #374151', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            {/* Payment Icons */}
            <div style={{ display: 'flex', gap: '12px', fontSize: '24px' }}>
              <span>💳</span>
              <span>🏦</span>
              <span>📱</span>
              <span>💰</span>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((social) => (
                <a key={social} href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>{social}</a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #374151', color: '#6b7280', fontSize: '14px' }}>
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <LayoutContent children={children} />
      <CartDrawer />
    </CartProvider>
  );
};

export default Layout;
