import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Simple Header */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1rem 2rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.5rem',
            color: '#1a1a1a',
            fontWeight: 600,
            letterSpacing: '0.1em'
          }}>
            VELMORA
          </div>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/shop" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.875rem' }}>Shop</a>
            <a href="/collections" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.875rem' }}>Collections</a>
            <a href="/about" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.875rem' }}>About</a>
            <a href="/journal" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.875rem' }}>Journal</a>
            <span style={{ color: '#6b6b6b', cursor: 'pointer' }}>🔍</span>
            <span style={{ color: '#6b6b6b', cursor: 'pointer' }}>🛒</span>
          </nav>
        </div>
      </header>
      
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      
      {/* Simple Footer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '4rem 2rem 2rem',
        marginTop: '4rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              VELMORA
            </h3>
            <p style={{ color: '#9a9a9a', fontSize: '0.875rem' }}>
              Fine jewelry crafted with care for the modern woman.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Shop
            </h4>
            {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals'].map((link, i) => (
              <p key={i} style={{ color: '#9a9a9a', fontSize: '0.875rem', marginBottom: '0.5rem', cursor: 'pointer' }}>
                {link}
              </p>
            ))}
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Help
            </h4>
            {['Shipping Info', 'Returns', 'Size Guide', 'Contact Us'].map((link, i) => (
              <p key={i} style={{ color: '#9a9a9a', fontSize: '0.875rem', marginBottom: '0.5rem', cursor: 'pointer' }}>
                {link}
              </p>
            ))}
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Company
            </h4>
            {['About Us', 'Journal', 'Sustainability', 'Press'].map((link, i) => (
              <p key={i} style={{ color: '#9a9a9a', fontSize: '0.875rem', marginBottom: '0.5rem', cursor: 'pointer' }}>
                {link}
              </p>
            ))}
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #2d2d2d',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#9a9a9a',
          fontSize: '0.875rem'
        }}>
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
