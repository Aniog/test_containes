import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt="Gold jewelry on model in warm light"
          data-strk-img-id="hero-bg-velmora-a3f8c2"
          data-strk-bg="[hero-headline] [hero-subhead] gold jewelry model warm luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-caption uppercase tracking-[0.2em] text-gold mb-6 font-sans font-medium">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-light mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="text-white/80 font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Demi-fine gold jewelry designed for the modern woman. Thoughtfully crafted, beautifully accessible.
        </p>
        <Link
          to="/collections"
          className="inline-block px-10 py-4 bg-gold text-white text-btn uppercase tracking-btn font-sans font-medium hover:bg-gold-dark transition-colors duration-200 rounded-btn"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
