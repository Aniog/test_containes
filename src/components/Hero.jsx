import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 
          className="font-serif text-cream-50 mb-6"
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            letterSpacing: '0.02em'
          }}
        >
          Crafted to be Treasured
        </h1>
        
        <p 
          className="text-cream-200 mb-10 leading-relaxed"
          style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.05em'
          }}
        >
          Demi-fine jewelry designed for life's most meaningful moments
        </p>

        <Link 
          to="/shop" 
          className="btn-primary inline-block"
          style={{ textDecoration: 'none' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-cream-50/40" />
      </div>
    </section>
  );
}
