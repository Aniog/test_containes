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
    <section ref={containerRef} className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-subtitle-text] [hero-title-text] luxury gold jewelry elegant warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/40 via-velmora-black/30 to-velmora-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-5 md:px-8">
        <p className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold-light mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Fine Jewelry Collection
        </p>
        <h1
          id="hero-title-text"
          className="font-serif text-display text-white mb-4 animate-fade-in max-w-[700px]"
          style={{ animationDelay: '0.4s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle-text"
          className="font-sans text-body-lg text-white/80 max-w-[480px] mb-8 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Demi-fine 18K gold jewelry designed for everyday elegance. Pieces that tell your story.
        </p>
        <Link
          to="/shop"
          className="animate-fade-in inline-block px-10 py-3.5 bg-velmora-gold text-white text-body-sm font-medium tracking-[0.1em] uppercase rounded-pill hover:bg-velmora-gold-dark transition-colors duration-300"
          style={{ animationDelay: '0.8s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-white/30" />
      </div>
    </section>
  );
}
