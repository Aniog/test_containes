import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        data-strk-bg-id="hero-bg-velmora-9a8b7c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-velmora-base/40"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-base/50 via-velmora-base/20 to-velmora-base/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry designed for the modern woman — elevated everyday pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-velmora-gold-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
