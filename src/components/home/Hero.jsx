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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-9f3a2c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-velvet/60 via-velvet/40 to-velvet/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <p
          id="hero-eyebrow"
          className="font-sans text-xs tracking-widest3 uppercase text-sand mb-6"
        >
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream font-light leading-tight mb-6"
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-base md:text-lg text-champagne/80 font-light mb-10 max-w-md mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-cream font-sans text-xs tracking-widest2 uppercase px-10 py-4 hover:bg-gold-light transition-all duration-300 font-medium"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-sand/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
