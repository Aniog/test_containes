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
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-6 animate-fade-up">
              New Collection
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-velmora-cream leading-[1.1] tracking-wide animate-fade-up delay-100"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="mt-6 text-sm md:text-base text-velmora-cream/70 leading-relaxed max-w-sm animate-fade-up delay-200"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. Hypoallergenic. Everyday-ready.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link
                to="/shop"
                className="inline-block px-10 py-4 bg-velmora-gold text-velmora-obsidian text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold-light transition-colors text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block px-10 py-4 border border-velmora-cream/40 text-velmora-cream text-xs uppercase tracking-widest font-medium hover:border-velmora-cream hover:bg-velmora-cream/10 transition-colors text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-400">
        <span className="text-[10px] uppercase tracking-[0.2em] text-velmora-cream/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-cream/40 to-transparent" />
      </div>
    </section>
  );
}
