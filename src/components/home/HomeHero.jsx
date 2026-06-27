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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        data-strk-bg-id="homepage-hero-bg"
        data-strk-bg="gold jewelry on female model close up warm lighting editorial fashion"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 bg-cover bg-center"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 w-full max-w-4xl mx-auto space-y-8">
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-8xl font-serif tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Crafted to be Treasured
          </h1>
        </div>
        <p className="text-sm md:text-lg uppercase tracking-[0.3em] font-light animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000">
          Demi-fine gold jewelry for the modern woman
        </p>
        <div className="pt-4 animate-in fade-in slide-in-from-bottom-2 delay-700 duration-1000">
          <Link 
            to="/shop" 
            className="inline-block bg-white text-accent px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-white transition-all duration-500"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
