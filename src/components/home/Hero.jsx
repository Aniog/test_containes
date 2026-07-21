import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-primary/20"
        data-strk-bg="[hero-headline] jewelry model editorial closeup gold"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative text-center text-white px-6">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] mb-4">
          Fine Jewelry for the Modern Woman
        </p>
        <h1
          id="hero-headline"
          className="text-5xl md:text-8xl font-serif mb-8 max-w-4xl mx-auto leading-[1.1]"
        >
          Crafted to be Treasured
        </h1>
        <div>
          <button 
            onClick={() => navigate('/shop')}
            className="px-10 py-4 border border-white text-white uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-primary transition-all duration-500 font-sans font-medium"
          >
            Shop the Collection
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-widest text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
