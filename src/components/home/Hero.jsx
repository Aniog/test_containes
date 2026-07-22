import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl animate-fade-in">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-velmora-white leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-4 md:mt-6 text-base md:text-lg text-velmora-cream/90 font-sans font-light leading-relaxed max-w-xl mx-auto">
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-velmora-gold text-velmora-white px-10 py-3 text-xs uppercase tracking-nav font-sans font-medium hover:bg-velmora-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
