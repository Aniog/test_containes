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
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="fine gold jewelry on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 scale-105"
      />
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto space-y-6 animate-in fade-in zoom-in duration-1000">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-light italic tracking-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-sm md:text-base uppercase tracking-[0.3em] font-light max-w-xl mx-auto">
          Demi-fine gold jewelry for the modern woman. Elevated essentials designed for everyday luxury.
        </p>
        <div className="pt-8">
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-white text-foreground text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-white transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
