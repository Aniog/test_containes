import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center overflow-hidden bg-[#EDE6D9]">
      {/* Background image - warm editorial jewelry shot */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
          alt="Velmora Fine Jewelry - Warm editorial close-up of gold jewelry on model"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-white text-5xl md:text-7xl tracking-[-0.02em] leading-[1.05] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto mb-9 tracking-wide">
          Demi-fine gold jewelry for the moments that matter.
        </p>
        <Link 
          to="/shop" 
          className="btn btn-primary inline-block text-sm tracking-[0.08em]"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
