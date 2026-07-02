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
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fade-in">
            <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-6">
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-velmora-warm-white font-light leading-tight"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base text-velmora-warm-white/75 mt-6 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated. Hypoallergenic. Made to last.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300 font-medium"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-velmora-warm-white/40 text-velmora-warm-white font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-velmora-warm-white/50 animate-pulse" />
        <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-warm-white/60">Scroll</span>
      </div>
    </section>
  );
}
