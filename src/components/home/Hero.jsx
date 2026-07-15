import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--color-bg-alt)]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
          alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white text-5xl md:text-7xl font-serif tracking-[-0.02em] mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto mb-8 font-light">
          Demi-fine gold jewelry for the moments that matter.
        </p>
        <Link to="/shop" className="btn btn-gold inline-block">
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
