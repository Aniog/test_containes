import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <p
          id="hero-eyebrow"
          className="text-xs tracking-[0.3em] uppercase text-gold font-sans mb-6"
        >
          New Collection
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-parchment font-light leading-tight max-w-3xl"
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="mt-6 text-sm md:text-base text-parchment/70 font-sans max-w-md leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who knows her worth.
          Designed to be worn every day, gifted with love.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-gold text-ink px-10 py-4 text-xs tracking-widest uppercase font-medium font-sans hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-parchment/30 animate-pulse" />
      </div>
    </section>
  );
}
