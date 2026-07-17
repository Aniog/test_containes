import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-velmora-cream mb-12 font-light tracking-wide">
          Demi-fine jewelry for life's most cherished moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-4 uppercase tracking-wider text-sm hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-premium"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
