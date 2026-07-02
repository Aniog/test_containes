import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[85vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto container-px flex flex-col items-center justify-center text-center">
        <p className="font-sans text-overline uppercase tracking-[0.2em] text-gold-pale mb-4">
          Demi-fine 18K gold plated jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-display-sm md:text-display text-white max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-body-lg text-white/80 mt-5 max-w-lg"
        >
          Intentional designs for women who appreciate the art of fine detail.
          Every piece tells a story worth wearing.
        </p>
        <Link to="/shop" className="btn-primary mt-8">
          Shop the Collection
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
