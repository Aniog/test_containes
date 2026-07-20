import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this path exists or omit for now

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if(strkImgConfig && containerRef.current) {
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
      }
    } catch(e) {
      console.warn("ImageHelper setup skipped for now", e);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#2C2C28]">
      {/* Background Image Setup using required attributes */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-sub] [hero-head]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <p 
          id="hero-sub"
          className="text-white uppercase tracking-[0.3em] text-sm mb-6 drop-shadow-md"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1 
          id="hero-head"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-10 drop-shadow-lg leading-tight text-balance"
        >
          Crafted to be Treasured
        </h1>
        <Link 
          to="/shop"
          className="inline-block bg-white text-foreground px-10 py-4 uppercase tracking-[0.15em] text-sm hover:bg-white/90 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}