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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-7f3a2c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-6 opacity-90">
          New Collection 2026
        </p>
        <h1 id="hero-headline" className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight mb-6">
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p id="hero-subhead" className="font-sans text-sm md:text-base text-ivory/80 mb-10 max-w-md mx-auto leading-relaxed">
          Demi-fine gold jewelry for the woman who knows her worth. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] tracking-widest uppercase text-ivory">Scroll</span>
        <div className="w-px h-8 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
