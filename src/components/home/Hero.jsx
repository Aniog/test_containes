import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-microcosmos"
        data-strk-bg="[hero-title] [hero-subtitle] Microscopic world hidden beauty"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-slate-950/60 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-slate-50 mb-6 tracking-tight">
          Exploring the <span className="text-teal-400">MicroCosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
          Journey into a hidden universe teeming with life, complexity, and wonder that exists just beyond the reach of the naked eye.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#gallery" className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all">
            Enter the Gallery <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#about" className="text-slate-50 border border-slate-700 hover:border-teal-400 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm">
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
