import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 text-center text-white px-5 max-w-[720px] mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-none tracking-[0.02em] mb-6 animate-fade-in"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base text-white/70 tracking-[0.1em] uppercase mb-10 animate-fade-in"
        >
          Demi-fine jewelry for the modern woman
        </p>
        <Link
          to="/shop"
          className="btn-accent text-sm tracking-[0.15em]"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <span className="block w-5 h-8 border-2 border-white/30 rounded-full relative">
          <span className="block w-1 h-1.5 bg-white/60 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 animate-bounce" />
        </span>
      </div>
    </section>
  );
}