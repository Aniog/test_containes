import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="container-luxury relative z-10">
        <div className="max-w-xl">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--color-gold)' }}
          >
            Demi-Fine Jewelry
          </p>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
            style={{ color: 'var(--color-espresso)' }}
          >
            Crafted to be<br />
            <em>Treasured</em>
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-md" style={{ color: 'var(--color-walnut)' }}>
            18K gold plated pieces designed for the modern woman. 
            Quiet luxury that elevates every day.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
