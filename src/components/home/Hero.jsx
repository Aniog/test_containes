import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-charcoal-900/10" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 py-32 md:py-0">
        <div className="max-w-xl">
          <p className="text-gold-300 text-xs tracking-widest-2xl uppercase font-sans font-medium mb-4 animate-fade-in">
            Fine Jewelry Collection
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 leading-[1.1] mb-6 animate-slide-up"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream-200/80 text-sm md:text-base leading-relaxed max-w-md mb-8 animate-slide-up"
            style={{ animationDelay: '0.15s' }}
          >
            Premium 18K gold plated jewelry, designed for the modern woman.
            Accessible luxury that lasts — because you deserve to shine every day.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-400 text-charcoal-900 text-sm font-medium tracking-widest uppercase hover:bg-gold-300 transition-all duration-300 rounded-sm animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
