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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase text-gold-light mb-6 font-medium"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.02em' }}
        >
          Crafted to be<br />
          <em>Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="text-sm md:text-base text-cream/80 mb-10 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-charcoal text-xs tracking-widest uppercase px-10 py-4 font-medium hover:bg-gold-dark transition-colors duration-200"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
}
