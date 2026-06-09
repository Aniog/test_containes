import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load if strkImgConfig is valid or handled gracefully
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.warn("strkImgConfig not available or ImageHelper failed", e);
    }
  }, []);

  return (
    <section id="home" className="relative pt-20" ref={containerRef}>
      <div 
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-artitect-1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Precision in Every Fold
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300">
            Elevating the standard of sheet metal folding. Elegant, powerful, and user-friendly machinery designed for modern manufacturing.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#products" className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
              View Our Products <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
