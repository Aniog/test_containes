import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          id="hero-subtitle"
          className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] mb-4 md:mb-6"
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-white text-4xl md:text-6xl lg:text-7xl tracking-wide max-w-4xl leading-[1.1]"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/70 text-sm md:text-base mt-4 md:mt-6 max-w-md leading-relaxed">
          Timeless pieces designed for everyday elegance. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block bg-bronze text-white text-xs uppercase tracking-widest px-10 py-4 hover:bg-bronze-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
