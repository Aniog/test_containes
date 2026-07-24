import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-neutral-900"
        data-strk-bg-id="hero-bg-9a2b3c"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-black/20" /> {/* subtle overlay */}
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="text-sm md:text-base uppercase tracking-[0.3em] font-light mb-12 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000"
        >
          Fine Jewelry for the Modern Woman
        </p>
        <Link
          to="/shop"
          className="bg-white text-black px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-all duration-300 hover:tracking-[0.25em] animate-in fade-in slide-in-from-bottom-2 delay-700 duration-1000"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 space-y-2">
        <span className="text-[10px] uppercase tracking-widest font-light">Scroll Explore</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/60 animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
