import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-stone-800"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <p
          id="hero-eyebrow"
          className="text-white/90 text-xs md:text-sm uppercase tracking-[0.25em] mb-4 md:mb-6"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] max-w-5xl mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 font-sans text-base md:text-lg max-w-xl mb-8 md:mb-10"
        >
          Timeless pieces designed for everyday luxury — made to layer, love, and last.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
