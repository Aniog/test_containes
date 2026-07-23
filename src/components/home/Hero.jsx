import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px]">
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink"
      />

      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-cream sm:px-6 lg:px-8">
        <p
          id="hero-subtitle"
          className="text-xs uppercase tracking-[0.25em] text-gold-light"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-3xl font-serif text-5xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/90 sm:text-lg">
          Timeless pieces designed for everyday elegance and the moments that
          matter most.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-gold px-10 py-4 text-xs uppercase tracking-widest text-white transition hover:bg-gold-hover"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-0 right-0 hidden animate-bounce justify-center md:flex">
        <div className="h-10 w-[1px] bg-cream/40" />
      </div>
    </section>
  );
}
