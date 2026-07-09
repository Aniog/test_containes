import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-stone-900"
        data-strk-bg-id="hero-bg-9922x"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-sm sm:text-base md:text-lg text-white/90 font-sans uppercase tracking-[0.3em] mb-10 max-w-2xl mx-auto">
          Timeless demi-fine jewelry for your everyday luxury
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-white text-charcoal px-10 py-5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
