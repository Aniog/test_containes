import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-velmora-obsidian/50 via-velmora-obsidian/30 to-velmora-obsidian/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto animate-fadeIn">
        <p
          id="hero-eyebrow"
          className="text-xs tracking-[0.35em] uppercase font-medium text-velmora-gold mb-6 font-sans"
        >
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl font-light text-velmora-white leading-[1.1] tracking-wide mb-6"
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="text-base md:text-lg text-velmora-sand font-sans font-light leading-relaxed mb-10 max-w-md mx-auto"
        >
          Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold plated, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-velmora-obsidian px-10 py-4 text-xs tracking-[0.25em] uppercase font-medium font-sans hover:bg-velmora-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-velmora-gold/60 animate-pulse" />
      </div>
    </section>
  );
}
