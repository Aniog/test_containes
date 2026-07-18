import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-stone-900"
        data-strk-bg-id="hero-bg-9u2k1a"
        data-strk-bg="[hero-sub] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-stone-900/30" /> {/* Dark overlay for text readability */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h1 
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-50 mb-6 drop-shadow-md"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-sub"
          className="text-lg md:text-xl text-stone-100 mb-10 font-light tracking-wide max-w-lg mx-auto drop-shadow-sm"
        >
          Demi-fine gold jewelry for the modern romantic. Everyday elegance meets accessible luxury.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-stone-50 text-stone-900 px-10 py-4 hover:bg-stone-200 transition-colors uppercase tracking-widest text-sm font-medium rounded-sm shadow-sm"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-16 bg-stone-50/50" />
      </div>
    </section>
  );
};

export default HomeHero;
