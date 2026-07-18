import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wider leading-tight max-w-3xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 text-sm md:text-base text-white/70 tracking-[0.08em] uppercase max-w-md">
          Demi-fine jewelry for the moments that matter.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-accent text-white px-10 py-3.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-warm-600 transition-all duration-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
