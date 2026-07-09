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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Hidden image style hint for stock image query */}
      <span id="hero-style-hint" className="sr-only">woman wearing gold jewelry warm soft light portrait editorial</span>
      <span id="hero-mood" className="sr-only">demi-fine gold necklace earrings elegant woman close-up warm tones</span>

      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-mood] [hero-style-hint]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />

      {/* Gradient overlay — left-heavy so text is always readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-obsidian/10" />

      {/* Content */}
      <div className="relative z-20 section-container w-full">
        <div className="max-w-xl">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl lg:text-6xl xl:text-7xl text-cream font-light leading-tight"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-base lg:text-lg text-cream/80 mt-5 leading-relaxed"
          >
            Demi-fine gold jewelry for the woman who knows her worth.
            Designed to be worn every day, treasured forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="btn-outlined"
              style={{ borderColor: 'rgba(250,247,242,0.5)', color: '#FAF7F2' }}
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-widest uppercase text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-cream/30" />
      </div>
    </section>
  );
}
