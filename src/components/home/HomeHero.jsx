import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-gray-900"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model close up warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 
          id="hero-title"
          className="text-5xl md:text-8xl font-serif font-light mb-6 tracking-tight leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subtitle"
          className="text-lg md:text-xl font-light mb-10 tracking-[0.1em] opacity-90 animate-in fade-in slide-in-from-bottom-8 delay-300 duration-1000"
        >
          Demi-fine gold jewelry for the modern minimalist.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-8 delay-500 duration-1000">
          <Link 
            to="/shop" 
            className="inline-block bg-white text-black px-12 py-4 text-sm tracking-[0.2em] font-medium uppercase hover:bg-primary hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-12 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex justify-between items-center py-6 border-t border-white/20 text-[10px] tracking-[0.3em] uppercase text-white/80 font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="opacity-40">•</span>
            <span>30-Day Returns</span>
            <span className="opacity-40">•</span>
            <span>18K Gold Plated</span>
            <span className="opacity-40">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>
    </section>
  );
}
