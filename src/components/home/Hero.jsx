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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image using data-strk-bg */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-1"
        data-strk-bg="[hero-title] close up elegant warm gold jewelry model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Dim overlay for text legibility */}
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto mt-20">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Crafted to be <br/> Treasured
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 opacity-90 max-w-xl mx-auto">
          Demi-fine jewelry for the modern aesthetic. Everyday elegance, universally accessible.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-primary text-primary-foreground px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-white hover:text-foreground transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;