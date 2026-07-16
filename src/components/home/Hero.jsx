import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section 
      style={{ 
        position: 'relative', 
        height: '100vh', 
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#EDE8E0'
      }}
    >
      <img 
        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85" 
        alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
        style={{ 
          position: 'absolute', 
          inset: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }}
      />
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)' 
      }} />
      
      <div style={{ 
        position: 'relative', 
        textAlign: 'center', 
        color: '#FFFFFF',
        padding: '0 1.5rem',
        maxWidth: '700px'
      }}>
        <h1 style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
          fontWeight: 500,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          Crafted to be Treasured
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          marginBottom: '2rem',
          opacity: 0.95,
          letterSpacing: '0.02em'
        }}>
          Demi-fine gold jewelry for the moments that matter.
        </p>
        <Link to="/shop">
          <Button variant="primary" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;