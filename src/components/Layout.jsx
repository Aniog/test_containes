import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'white' : 'transparent',
        boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '5rem'
        }}>
          <Link to="/" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textDecoration: 'none',
            color: isScrolled ? '#1a1a1a' : 'white'
          }}>
            VELMORA
          </Link>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/shop" style={{
              textDecoration: 'none',
              color: isScrolled ? '#1a1a1a' : 'white',
              fontSize: '0.875rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em'
            }}>
              Shop
            </Link>
            <Link to="/about" style={{
              textDecoration: 'none',
              color: isScrolled ? '#1a1a1a' : 'white',
              fontSize: '0.875rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em'
            }}>
              About
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                padding: '0.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: isScrolled ? '#1a1a1a' : 'white',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </nav>
      <main style={{ paddingTop: '5rem' }}>
        {children}
      </main>
      <CartDrawer />
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '4rem 1.5rem',
        marginTop: '4rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', marginBottom: '1rem' }}>
            VELMORA
          </p>
          <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
