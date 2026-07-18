import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#f2ede6',
        paddingTop: '60px'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://picsum.photos/id/1011/2000/2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)'
        }}
      />
      
      <div 
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '700px'
        }}
      >
        <h1 
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            color: '#f8f5f1',
            marginBottom: '1.5rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}
        >
          Crafted to be Treasured
        </h1>
        <p 
          style={{
            fontSize: '1.125rem',
            color: '#f8f5f1',
            marginBottom: '2rem',
            opacity: 0.95,
            maxWidth: '420px',
            margin: '0 auto 2rem'
          }}
        >
          Demi-fine gold jewelry, thoughtfully designed for the moments that matter.
        </p>
        <Link to="/shop" className="btn btn-accent">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
