import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartContext } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCartContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'white' : 'transparent',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '5rem'
        }}>
          <Link
            to="/"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.5rem',
              letterSpacing: '0.25em',
              textDecoration: 'none',
              color: (isScrolled || location.pathname !== '/') ? '#1a1a1a' : 'white'
            }}
          >
            VELMORA
          </Link>

          <div style={{ display: 'none', md: { display: 'flex' } }} className="hidden md:flex items-center" style={{ gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  color: (isScrolled || location.pathname !== '/') ? '#1a1a1a' : 'white'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: (isScrolled || location.pathname !== '/') ? '#1a1a1a' : 'white' }}>
              <Search size={20} />
            </button>
            
            <button
              onClick={toggleCart}
              style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', color: (isScrolled || location.pathname !== '/') ? '#1a1a1a' : 'white' }}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  right: '-0.5rem',
                  backgroundColor: '#c9a96e',
                  color: 'white',
                  fontSize: '0.75rem',
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', md: { display: 'none' } }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div style={{ md: { display: 'none' }, backgroundColor: 'white', borderTop: '1px solid #e8e0d0' }}>
            <div style={{ padding: '1rem 0' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: '#1a1a1a'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
