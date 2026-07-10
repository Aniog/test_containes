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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px]">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-brand-charcoal"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 font-sans text-sm md:text-base tracking-wide max-w-lg"
        >
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-brand-gold text-white px-10 py-3.5 font-sans text-sm tracking-super-wide uppercase transition-all duration-300 hover:bg-brand-gold-dark"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
