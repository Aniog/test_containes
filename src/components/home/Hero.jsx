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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl animate-fadeIn">
          <p
            id="hero-eyebrow"
            className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-6"
          >
            New Collection · 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl text-ivory font-light leading-[1.05] tracking-wide mb-6"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-sm text-ivory/75 leading-relaxed mb-10 max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world with quiet confidence.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-charcoal px-10 py-4 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-ivory">Scroll</span>
        <div className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
