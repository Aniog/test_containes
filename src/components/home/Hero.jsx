import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with warm gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-velmora-cream via-velmora-warm to-velmora-sand">
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Demi-fine jewelry designed for the modern woman. Each piece tells a story of quiet luxury and timeless elegance.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-white text-velmora-charcoal px-10 py-4 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold hover:text-white transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-0.5 h-12 bg-white opacity-60" />
      </div>
    </section>
  );
}
