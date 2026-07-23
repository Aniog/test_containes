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
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Hidden text nodes for image query context */}
      <span id="hero-headline" className="sr-only">Crafted to be Treasured — Velmora Fine Jewelry</span>
      <span id="hero-subhead" className="sr-only">Demi-fine gold jewelry for the modern woman</span>

      {/* Full-bleed background image */}
      <img
        data-strk-img-id="hero-bg-img-f1a2b3"
        data-strk-img="[hero-subhead] [hero-headline]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Warm dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(44,36,32,0.45) 0%, rgba(44,36,32,0.25) 50%, rgba(44,36,32,0.55) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs uppercase tracking-widest mb-6 font-medium" style={{ color: 'rgb(232,213,163)' }}>
          New Collection — Summer 2026
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6"
          style={{ color: 'rgb(250,247,242)' }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          className="font-sans text-base md:text-lg mb-10 font-light leading-relaxed"
          style={{ color: 'rgba(250,247,242,0.82)' }}
        >
          Demi-fine gold jewelry for the woman who moves through the world with intention.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 font-sans uppercase tracking-widest text-xs font-semibold transition-colors duration-300"
          style={{ backgroundColor: 'rgb(201,169,110)', color: 'rgb(250,247,242)' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgb(160,120,64)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgb(201,169,110)'}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 animate-pulse" style={{ backgroundColor: 'rgba(250,247,242,0.35)' }} />
      </div>
    </section>
  );
}
