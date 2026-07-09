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
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-obsidian"
    >
      {/* Hidden text nodes for image query interpolation */}
      <span id="hero-headline" className="sr-only">Crafted to be Treasured gold jewelry woman</span>
      <span id="hero-subhead" className="sr-only">demi-fine gold jewelry hypoallergenic everyday luxury necklace earrings</span>

      {/* Background image — img tag with object-fit cover for reliable full coverage */}
      <img
        data-strk-img-id="hero-img-velmora-8f2a9c"
        data-strk-img="[hero-subhead] [hero-headline]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Warm overlay — stronger gradient for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-obsidian/10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="max-w-lg">
            <p className="font-manrope text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
              New Collection 2026
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.05] mb-6">
              Crafted to be<br />
              <em className="italic font-light">Treasured</em>
            </h1>
            <p className="font-manrope text-sm md:text-base text-cream/80 leading-relaxed mb-10 max-w-sm">
              Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic. Everyday luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-gold text-cream font-manrope text-xs font-semibold tracking-[0.15em] uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block border border-cream/50 text-cream font-manrope text-xs font-medium tracking-[0.15em] uppercase px-10 py-4 hover:border-cream hover:bg-cream/10 transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-cream/0 to-cream/40 animate-pulse" />
      </div>
    </section>
  );
}
