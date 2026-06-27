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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h2 id="hero-subtitle" className="font-sans text-xs md:text-sm text-white uppercase tracking-[0.4em] mb-6 drop-shadow-sm">
          Quiet Luxury // Timeless Design
        </h2>
        <h1 id="hero-title" className="font-serif text-5xl md:text-8xl text-white mb-10 leading-tight drop-shadow-md">
          Crafted to be <br /> Treasured
        </h1>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-primary px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-white hover:opacity-100 transition-opacity opacity-70">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] vertical-rl">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-dash" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
