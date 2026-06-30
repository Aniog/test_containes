import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-velmora-charcoal/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight mb-6 animate-fade-in">
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry that celebrates the beauty in everyday moments. 
          Each piece thoughtfully designed to be worn, loved, and passed down.
        </p>

        <Link
          to="/shop"
          className="btn-primary inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/60" />
      </div>
    </section>
  );
}
