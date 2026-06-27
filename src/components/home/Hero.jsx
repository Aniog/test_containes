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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className="hero-animate hero-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="hero-animate hero-delay-2 mt-4 md:mt-6 text-sm md:text-base text-white/80 max-w-lg tracking-wide font-light"
        >
          Demi-fine gold jewelry designed for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="hero-animate hero-delay-3 mt-8 md:mt-10 px-10 py-3.5 bg-velmora-gold text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-300 hover:shadow-lg hover:shadow-velmora-gold/20"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
