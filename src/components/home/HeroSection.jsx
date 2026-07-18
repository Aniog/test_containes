import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/40 via-velmora-black/30 to-velmora-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="font-sans text-caption uppercase tracking-mega-wide text-velmora-gold mb-4 animate-fade-in">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-display md:text-[5rem] lg:text-[6rem] text-velmora-cream mb-6 animate-fade-in-up"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-body-lg text-velmora-cream/80 max-w-xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            18K gold-plated jewelry designed for the modern woman. 
            Premium quality, hypoallergenic, made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/shop" className="btn-primary px-10 py-4">
              Shop the Collection
            </Link>
            <Link to="/about" className="btn-outline border-velmora-cream/30 text-velmora-cream hover:bg-velmora-cream hover:text-velmora-charcoal px-10 py-4">
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-velmora-cream/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-velmora-cream/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
