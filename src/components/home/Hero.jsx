import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[85vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <p className="font-sans text-xs md:text-sm tracking-wide-custom uppercase text-white/80 mb-4 animate-fadeIn">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-white/80 mt-4 md:mt-6 max-w-lg leading-relaxed"
        >
          Premium demi-fine jewelry, designed for the modern woman. 18K gold plated,
          hypoallergenic, and made to be worn every day.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center px-8 py-3.5 bg-gold text-white font-sans text-sm font-medium tracking-wide uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/40 mx-auto mb-2" />
        <p className="text-[10px] text-white/60 tracking-widest uppercase">Scroll</p>
      </div>
    </section>
  );
}
