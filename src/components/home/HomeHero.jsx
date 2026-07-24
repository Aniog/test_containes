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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-zinc-900"
        data-strk-bg-id="homepage-hero-bg-9a2f1b"
        data-strk-bg="[hero-headline] [hero-subhead] jewelry model closeup warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl pt-16">
        <h1 
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subhead"
          className="text-sm md:text-lg tracking-[0.2em] uppercase mb-10 opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
        >
          Demi-fine jewelry for the modern romantic.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-[#FCFBF7] text-[#1C1C1C] px-10 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-70">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
