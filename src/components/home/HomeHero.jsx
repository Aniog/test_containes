import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a1d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-5">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 text-sm md:text-base text-white/70 max-w-md leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who knows that true luxury whispers. 
          Discover our collection of earrings, necklaces, and huggies — designed to be worn, loved, and passed down.
        </p>
        <Link
          to="/shop"
          className="btn-primary mt-8"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
