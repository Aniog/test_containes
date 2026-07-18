import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-9f3a2b"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto animate-fadeIn">
        <p
          id="hero-eyebrow"
          className="font-inter text-xs tracking-[0.25em] uppercase text-gold mb-6"
        >
          New Collection · 2024
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] tracking-wide mb-6"
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter text-sm md:text-base text-ivory/75 leading-relaxed mb-10 max-w-md mx-auto"
        >
          Demi-fine gold jewelry for the woman who moves through the world with intention.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-obsidian font-inter text-xs tracking-[0.15em] uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-inter text-[9px] tracking-[0.2em] uppercase text-ivory/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
