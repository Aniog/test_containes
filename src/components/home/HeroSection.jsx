import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="gold jewelry model elegant warm lighting closeup"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-200 mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-white/70 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Luxury you can wear every day. Our 18K gold plated jewelry is designed for the modern woman who values quality, beauty, and effortless elegance.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <Link to="/shop" className="btn-primary px-10 py-4 text-sm">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
