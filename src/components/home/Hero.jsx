import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#EDE6DC]">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
          alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="serif text-5xl md:text-6xl lg:text-7xl text-white tracking-[-0.02em] mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto mb-10">
          Demi-fine gold jewelry, made for the moments that matter.
        </p>
        <Link to="/shop" className="btn btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] hidden md:block">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};

export default Hero;
