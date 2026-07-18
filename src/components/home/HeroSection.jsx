import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] mb-4 opacity-80">
          New Collection
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base max-w-md opacity-80 font-light"
        >
          Timeless demi-fine jewelry designed for the moments that matter most.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block bg-accent text-white px-8 py-3.5 text-sm font-medium uppercase tracking-wide hover:bg-accent-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
