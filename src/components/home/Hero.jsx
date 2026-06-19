import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-secondary"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry lifestyle luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-2xl text-white">
        <h1 id="hero-title" className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 tracking-wide max-w-lg">
          Demi-fine essentials designed for the modern heirloom collection. 18K gold plated pieces that speak in whispers.
        </p>
        <button className="bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
          Shop the Collection
        </button>
      </div>

      {/* Subtle indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
