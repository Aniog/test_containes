import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/40 via-velmora-black/30 to-velmora-black/60" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1
            id="hero-title"
            className="font-serif text-display md:text-[5.5rem] font-light text-velmora-white leading-[1.05] tracking-[0.04em]"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-body-lg md:text-xl font-sans text-velmora-white/80 font-light max-w-xl mx-auto leading-relaxed"
          >
            Demi-fine gold jewelry designed for the modern woman. 
            Premium quality, accessible luxury.
          </p>
          <div className="mt-10">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-velmora-ivory to-transparent" />
    </section>
  );
}
