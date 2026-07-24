import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-slow-zoom"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-title] close-up warm-lit gold jewelry model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <h1 
          id="hero-title"
          className="font-serif text-5xl md:text-8xl text-white mb-6 tracking-wide leading-tight max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-white/80 text-sm md:text-lg mb-10 tracking-[0.1em] uppercase max-w-lg">
          Demi-fine essentials for your everyday story.
        </p>
        <button className="btn-premium flex items-center gap-3">
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
