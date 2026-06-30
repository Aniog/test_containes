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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-6">
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="text-ivory/70 text-base md:text-lg font-light leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-gold-light transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block border border-ivory/40 text-ivory text-xs tracking-widest uppercase font-medium px-10 py-4 hover:border-gold hover:text-gold transition-colors duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
