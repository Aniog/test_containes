import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 scale-105"
        data-strk-bg-id="hero-bg-microcosmos"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-slate-950/60 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-2xl"
        >
          MicroCosmos
        </h1>
        <p 
          id="hero-subtitle"
          className="text-xl md:text-2xl text-emerald-400 font-medium tracking-wide mb-8 drop-shadow-lg"
        >
          A Voyage into the Unseen Dimension
        </p>
        <button 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20"
        >
          Begin Discovery
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
