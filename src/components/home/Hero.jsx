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
    <section ref={containerRef} className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        data-strk-bg-id="home-hero-bg-9922ff"
        data-strk-bg="[hero-title] close-up gold demi-fine jewelry on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <h1 
          id="hero-title"
          className="text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.05em] leading-tight mb-8 drop-shadow-sm"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-sm md:text-lg uppercase tracking-widest-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Premium demi-fine pieces designed for the modern woman, bridging luxury and everyday elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-foreground px-12 py-4 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-500 transform hover:scale-105"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/60 animate-bounce">
        <div className="w-[1px] h-12 bg-white/40 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
