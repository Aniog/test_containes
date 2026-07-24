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
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            {/* Eyebrow */}
            <p className="text-velmora-gold text-xs font-medium tracking-[0.25em] uppercase mb-6">
              New Collection 2024
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-velmora-ivory leading-[1.1] tracking-wide mb-6"
            >
              Crafted to be
              <br />
              <em className="italic">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="text-velmora-ivory/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-velmora-gold-dark transition-colors duration-200 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-velmora-ivory/50 text-velmora-ivory px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-velmora-ivory/40" />
        <span className="text-velmora-ivory/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
