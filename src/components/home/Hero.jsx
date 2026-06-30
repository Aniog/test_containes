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
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight mb-5 animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base text-ivory/80 leading-relaxed mb-8 max-w-sm animate-fade-up"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Demi-fine gold jewelry for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-3 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <Link
                to="/shop"
                className="inline-block bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-block border border-ivory/60 text-ivory font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-ivory hover:bg-ivory/10 transition-colors duration-300 text-center"
              >
                Explore Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
        <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/50">Scroll</span>
        <div className="w-px h-8 bg-ivory/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[scroll-line_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
