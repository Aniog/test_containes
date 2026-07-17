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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-velmora-9f3a"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/20 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p id="hero-eyebrow" className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl text-ivory font-light leading-tight mb-6">
          Crafted to be<br />
          <em>Treasured</em>
        </h1>
        <p id="hero-subhead" className="font-sans text-sm md:text-base text-ivory/70 mb-10 leading-relaxed">
          18k gold plated jewelry for the woman who knows what she loves.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-champagne-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-ivory animate-pulse" />
      </div>
    </section>
  );
}
