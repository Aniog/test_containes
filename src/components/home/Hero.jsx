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
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Tagging */}
      <div 
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-9f2a31"
        data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 space-y-8 animate-in fade-in zoom-in duration-1000">
        <h1 
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/80 uppercase tracking-[0.3em] font-light max-w-xl mx-auto leading-loose">
          Quiet luxury demi-fine jewelry for your everyday elegance.
        </p>
        <div className="pt-6">
          <Link 
            to="/shop" 
            className="inline-block bg-[#C5A059] text-white px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
