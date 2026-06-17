import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-navy"
        data-strk-bg-id="hero-bg-7f3a1b"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/50 to-brand-navy/80" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <span className="inline-block text-brand-gold text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6">
          Excellence in Metal Fabrication
        </span>
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 text-balance"
        >
          Precision{' '}
          <span className="text-brand-gold">Metal Folding</span>{' '}
          Solutions
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          Industrial-grade double folding machines, sheet metal folders, and
          metal folding equipment engineered for accuracy, durability, and
          performance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 shadow-xl shadow-brand-gold/30 hover:shadow-brand-gold/40"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}