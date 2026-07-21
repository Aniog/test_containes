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
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/75 via-velmora-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            {/* Eyebrow */}
            <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-medium mb-6">
              New Collection 2024
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-velmora-text-light leading-[1.1] tracking-wide mb-6"
            >
              Crafted to be<br />
              <em className="not-italic text-velmora-gold">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="text-sm md:text-base text-velmora-sand font-light leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated, hypoallergenic, made to last.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-velmora-gold-light transition-all duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block border border-velmora-text-light/40 text-velmora-text-light text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
        <span className="text-[10px] tracking-[0.25em] uppercase text-velmora-mist">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-gold to-transparent" />
      </div>
    </section>
  );
}
