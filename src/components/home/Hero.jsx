import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#EDE6DC]">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85"
          alt="Velmora Fine Jewelry - Warm editorial close-up of gold jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
          Demi-fine gold jewelry for the woman who values quiet luxury.
        </p>
        <Link
          to="/shop"
          className="btn btn-primary inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] uppercase">
        Scroll to Explore
      </div>
    </section>
  );
};

export default Hero;
