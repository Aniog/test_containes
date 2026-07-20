import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Velmora jewelry on model"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-wide mb-6 animate-fadeIn">
          Crafted to be Treasured
        </h1>
        <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto mb-8 leading-relaxed animate-slideUp">
          Demi-fine jewelry designed for the modern woman. Each piece is a quiet celebration of everyday elegance.
        </p>
        <Link to="/shop" className="btn-primary text-base px-8 py-4 animate-slideUp" style={{ animationDelay: '200ms' }}>
          Shop the Collection
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
