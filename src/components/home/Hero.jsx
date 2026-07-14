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
      {/* Background with stock image tagging */}
      <div 
        className="absolute inset-0 z-0 bg-stone-200"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-title] close up luxury jewelry gold minimal lifestyle editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] font-sans mb-10 max-w-xl mx-auto">
          Demi-fine gold jewelry for the modern curator.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-accent hover:bg-white hover:text-foreground text-white px-10 py-4 text-xs font-sans font-medium uppercase tracking-[0.3em] transition-all duration-500 transform hover:scale-105"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
         <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
