import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-stone-900"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry on model close-up warm luxury editorial lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-light tracking-wide mb-4 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-stone-200 text-sm sm:text-base md:text-lg font-light tracking-wider max-w-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Demi-fine gold jewelry designed for the moments that matter
        </p>
        <Link
          to="/collection"
          className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-3 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
