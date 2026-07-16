import React, { useRef, useEffect } from 'react';
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
        className="absolute inset-0 bg-cover bg-center z-0"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-title] close-up gold demi-fine jewelry on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white space-y-8 px-6 max-w-3xl animate-in fade-in zoom-in duration-1000">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-serif leading-tight">
          Crafted to be <br /> Treasured
        </h1>
        <p className="text-sm md:text-base tracking-[0.2em] font-light uppercase max-w-xl mx-auto opacity-90">
          Timeless demi-fine jewelry designed for your everyday rituals.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-primary px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-background/10 backdrop-blur-md border-t border-white/10 text-white py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center text-[9px] md:text-[11px] tracking-[0.2em] uppercase font-medium">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
