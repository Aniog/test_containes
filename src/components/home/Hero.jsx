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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fade-in">
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-ivory leading-tight"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm text-ivory/75 mt-5 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated, hypoallergenic, made to last.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Link
                to="/shop"
                className="inline-block bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-250"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="font-manrope text-xs tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors flex items-center gap-2"
              >
                Our Story
                <span className="w-6 h-px bg-current inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-ivory/30 animate-pulse" />
      </div>
    </section>
  );
}
