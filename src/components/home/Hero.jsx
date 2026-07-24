import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-velmora-bg-alt">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
          alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 tracking-[-0.02em]">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 font-light tracking-wide">
          Demi-fine gold jewelry for the modern woman.
        </p>
        <Link to="/shop" className="btn btn-accent inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px] hidden md:block">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};

export default Hero;