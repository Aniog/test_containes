import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8 animate-fade-in">
          Demi-fine gold jewelry designed for quiet luxury. Every piece made to be worn, loved, and passed down.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-lift animate-fade-in"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
