import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-heading] [hero-subhead]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-velvet-950"
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pb-16 md:pb-20 md:pt-20">
          <div className="max-w-2xl">
            <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-gold-300 mb-4 md:mb-6">
              Velmora Fine Jewelry
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 md:mb-6"
            >
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p id="hero-subhead" className="font-sans text-base md:text-lg text-white/80 max-w-lg mb-8 md:mb-10 leading-relaxed">
              Demi-fine gold jewelry for the woman who values quality, craft, and quiet elegance.
            </p>
            <Link to="/shop" className="btn-primary text-base md:text-sm px-10 py-4 md:px-8 md:py-3">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}