import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-900"
        data-strk-bg-id="hero-background"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-espresso-900/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block font-sans text-sm tracking-[0.3em] uppercase text-cream-300 mb-4">
            New Collection
          </span>
          <h1 
            id="hero-title"
            className="font-serif text-display text-cream-50 mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p 
            id="hero-subtitle"
            className="font-sans text-body-lg text-cream-200 max-w-2xl mx-auto mb-10"
          >
            Discover our collection of demi-fine gold jewelry, designed for the modern woman who values quality, elegance, and timeless beauty.
          </p>
        </div>
        
        <Link 
          to="/collections"
          className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-cream-50 px-8 py-4 rounded-md font-sans text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:shadow-gold group"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cream-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream-300/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
