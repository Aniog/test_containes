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
        className="absolute inset-0 w-full h-full"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-obsidian/40 via-velmora-obsidian/20 to-velmora-obsidian/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        {/* Eyebrow */}
        <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-velmora-gold mb-6 animate-fadeIn">
          New Collection 2026
        </p>

        {/* Headline */}
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-velmora-cream leading-[1.05] tracking-wide max-w-4xl animate-fadeIn"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>

        {/* Subhead */}
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base font-light text-velmora-cream/70 mt-6 max-w-md leading-relaxed tracking-wide animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the woman who moves through the world with intention.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-fadeIn"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            to="/shop"
            className="bg-velmora-gold text-velmora-obsidian px-10 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-velmora-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            to="/#story"
            className="text-velmora-cream/70 text-xs font-sans font-medium tracking-[0.15em] uppercase border-b border-velmora-cream/30 pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <div className="w-px h-12 bg-gradient-to-b from-velmora-gold/60 to-transparent" />
      </div>
    </section>
  );
}
