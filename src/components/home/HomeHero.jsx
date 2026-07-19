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
    <section 
      ref={containerRef}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg-98234"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry model lifestyle"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-secondary"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto opacity-90">
          Demi-fine jewelry for women who value quality and quiet luxury.
        </p>
        <div className="pt-4">
          <Link
            to="/shop"
            className="inline-block bg-white text-primary px-10 py-4 brand-title text-sm hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
