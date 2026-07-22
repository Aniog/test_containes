import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-stone-900"
        data-strk-bg-id="hero-bg-9a2f1c"
        data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 id="hero-title" className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-sm md:text-base font-light uppercase tracking-ultra-wide mb-10 opacity-90 max-w-xl mx-auto">
          Demi-fine jewelry designed for your everyday moments and most celebrated milestones.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-stone-900 px-10 py-4 text-xs uppercase tracking-ultra-wide font-medium hover:bg-gold-100 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default HomeHero;
