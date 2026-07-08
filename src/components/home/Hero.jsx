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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay — strong enough to guarantee cream text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/65 to-obsidian/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light leading-[1.05] mb-5"
              style={{ color: '#FAF7F2' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm leading-relaxed mb-8 max-w-sm"
              style={{ color: 'rgba(250,247,242,0.72)' }}
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated. Hypoallergenic. Made to last.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
}
