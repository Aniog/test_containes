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
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
        <p className="text-white/80 text-xs md:text-sm tracking-[0.25em] uppercase mb-4 md:mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/70 text-sm md:text-base mt-4 md:mt-6 max-w-md leading-relaxed"
        >
          Timeless pieces designed for everyday elegance. 18K gold-plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-accent text-white px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
