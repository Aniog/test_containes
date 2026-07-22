import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-a7f3c2"
        data-strk-bg="warm gold jewelry on model close-up elegant editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-6">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 max-w-lg mx-auto mb-8 leading-relaxed">
          Premium demi-fine jewelry designed for the modern woman. 
          18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-sans">Scroll</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}
