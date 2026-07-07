import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink"
      />
      <div className="absolute inset-0 bg-ink/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-cream">
        <p className="font-sans text-xs md:text-sm uppercase tracking-brand text-gold-light mb-4">
          New Season
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-cream/90 max-w-xl mx-auto mb-10 font-light"
        >
          Demi-fine gold jewelry for the moments you want to remember. Designed in small batches, made to last.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  );
}
