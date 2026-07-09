import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[85vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-warm-900"
        data-strk-bg-id="hero-background"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry editorial closeup model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-900/30 via-warm-900/20 to-warm-900/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 md:pb-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-display lg:text-[4.5rem] text-white leading-[1.05] mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-sm md:text-base text-white/80 leading-relaxed mb-10 max-w-md mx-auto tracking-wide"
          >
            Demi-fine 18K gold plated jewelry, designed for the modern woman.
            Timeless pieces at accessible prices.
          </p>
          <Link to="/collection" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
