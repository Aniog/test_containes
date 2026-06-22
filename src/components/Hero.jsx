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
      id="hero" 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background with stock image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        data-strk-bg-id="hero-bg-microcosmos-782"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-50 tracking-tight mb-6"
        >
          The Unseen <span className="text-cyan-400">MicroCosmos</span>
        </h1>
        <p 
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Embark on a journey into the hidden dimensions of our world, where the smallest organisms reveal the grandest mysteries of life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#gallery"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0c] font-bold rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
          >
            Explore the Gallery
          </a>
          <a 
            href="#intro"
            className="px-8 py-4 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 rounded-full transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
