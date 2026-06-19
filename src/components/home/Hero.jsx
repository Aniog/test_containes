import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-stone-200"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-headline] [hero-subheadline] gold jewelry necklace close-up editorial warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 opacity-90">Fine Jewelry Collection</p>
        <h1 
          id="hero-headline"
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subheadline"
          className="text-sm md:text-base font-light tracking-widest max-w-xl mx-auto mb-10 opacity-80"
        >
          Elevated essentials discovery for the modern woman. Pure gold, timeless designs.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-[#B08D57] text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#967648] transition-all duration-300 transform hover:scale-105"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
        <span className="text-[10px] uppercase tracking-widest opacity-60">Discover</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};
