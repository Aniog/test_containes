import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from './ui/Base';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[700px] flex items-center overflow-hidden">
      {/* Background with stock image tagging */}
      <div
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-artitect"
        data-strk-bg="[hero-title] [hero-description] industrial metal machinery sheet metal folding"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 
            id="hero-title"
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            PRECISION <br />
            <span className="text-brand-accent">METAL FOLDING</span> <br />
            EXCELLENCE
          </h1>
          <p 
            id="hero-description"
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg"
          >
            Artitect Machinery delivers world-class double folding machines and sheet metal solutions for modern industrial manufacturing. Engineering perfection in every fold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" className="text-lg px-10 py-4 shadow-lg shadow-amber-500/20">
              View Our Products
            </Button>
            <Button variant="outline" className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-brand-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
