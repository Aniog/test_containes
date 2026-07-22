import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-charcoal-900/20 to-charcoal-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4 pt-24 pb-16">
        <h1 
          id="hero-title"
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream-50 mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Crafted to be Treasured
        </h1>
        
        <p 
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-cream-200 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: '0.4s' }}
        >
          Demi-fine gold jewelry designed for the modern woman. 
          Timeless elegance, everyday luxury.
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-10 py-4 bg-cream-50 text-charcoal-900 
                     font-sans text-sm font-medium tracking-widest uppercase 
                     hover:bg-gold-100 transition-all duration-300 hover:gap-4"
          style={{ animationDelay: '0.6s' }}
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-100/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream-100/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
