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
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold font-semibold mb-6 animate-fade-in-up">
              New Collection · 2024
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-ivory/70 mt-6 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth.
              Hypoallergenic. 18K gold plated. Made to last.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-gold-light transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center border border-ivory/40 text-ivory font-sans text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-ivory/30" />
        <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/40">Scroll</span>
      </div>
    </section>
  );
}
