import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[800px] overflow-hidden flex items-center" ref={containerRef}>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-9912a"
        data-strk-bg="[hero-title] [hero-subtitle] industrial folding machine workshop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="max-w-3xl">
          <h1 
            id="hero-title"
            className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700"
          >
            PRECISION <br/>METALS, <br/>
            <span className="text-amber-600">ARCHITECTED.</span>
          </h1>
          <p 
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100"
          >
            The ultimate standard in sheet metal folding. High-performance double folding machines designed for industry leaders.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <a 
              href="#products" 
              className="bg-amber-600 text-white px-8 py-4 rounded-md font-bold hover:bg-amber-700 transition-all flex items-center gap-2 shadow-lg"
            >
              Explore Products <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold hover:bg-white/20 transition-all"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
