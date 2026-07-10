import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-6 fade-in-up">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-velmora-text-light leading-[1.05] mb-6 fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic text-velmora-gold">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm text-velmora-text-light/70 leading-relaxed mb-10 max-w-sm fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated, hypoallergenic, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest-md uppercase px-10 py-4 hover:bg-velmora-gold-light transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <a
                href="#about"
                className="inline-block border border-velmora-text-light/40 text-velmora-text-light font-manrope text-xs tracking-widest-md uppercase px-10 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300 text-center"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-velmora-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
