import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&q=80"
          alt="Velmora fine jewelry on model"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-xs uppercase tracking-widest text-white/80 mb-4">Demi-Fine Jewelry</p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Timeless pieces in 18K gold, designed for the modern woman. Quiet luxury, elevated everyday.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
