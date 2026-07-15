import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[var(--color-bg-dark)]">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
          alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="heading-display text-5xl md:text-7xl text-white tracking-[-0.02em] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-md mx-auto mb-10 font-light tracking-wide">
          Demi-fine gold jewelry, made for the moments that matter.
        </p>
        <Link to="/shop">
          <Button variant="primary" className="min-w-[200px]">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
