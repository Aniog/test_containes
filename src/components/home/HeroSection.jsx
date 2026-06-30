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
    <section ref={containerRef} className="relative h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-base/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.3em] font-medium mb-6 opacity-80">
          New Collection
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="text-sm md:text-base font-light mt-6 max-w-lg opacity-80 leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday luxury. Pieces that feel
          special, priced to be loved.
        </p>
        <Link
          to="/shop"
          className="mt-10 px-10 py-4 bg-accent text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-px h-8 bg-white/40 mx-auto" />
      </div>
    </section>
  );
}
