import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg="elegant gold jewelry on model warm lighting editorial"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-velmora-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight"
        >
          Crafted to be<br />
          <span className="font-medium">Treasured</span>
        </h1>
        
        <p 
          id="hero-subhead"
          className="text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto opacity-90"
        >
          Demi-fine jewelry that celebrates life's precious moments. 
          Each piece is thoughtfully designed and crafted with 18k gold plating.
        </p>

        <Link
          to="/shop"
          className="btn-primary inline-flex items-center gap-2 hover:gap-4 transition-all duration-500"
        >
          Shop the Collection
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
