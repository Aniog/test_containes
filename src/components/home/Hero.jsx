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
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl fade-in-up">
            {/* Eyebrow */}
            <p className="text-xs font-sans uppercase tracking-widest text-velmora-gold mb-6">
              New Collection — 2024
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-serif font-light text-5xl md:text-7xl text-velmora-ivory leading-[1.05] mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="font-sans text-sm text-velmora-ivory/80 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to be worn every day, treasured forever.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian px-10 py-4 text-xs font-sans uppercase tracking-widest hover:bg-velmora-gold-light transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <a
                href="#about"
                className="inline-block border border-velmora-ivory/50 text-velmora-ivory px-10 py-4 text-xs font-sans uppercase tracking-widest hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300 text-center"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] font-sans uppercase tracking-widest text-velmora-ivory">Scroll</span>
        <div className="w-px h-8 bg-velmora-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
