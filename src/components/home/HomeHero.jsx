import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1
          id="hero-title"
          className="serif-heading text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base tracking-wider uppercase mb-10 text-white/80 font-light"
        >
          Demi-fine jewelry for the modern woman
        </p>
        <Link to="/shop">
          <Button variant="primary" size="lg" className="bg-white text-foreground hover:bg-white/90">
            Shop the Collection
          </Button>
        </Link>
      </div>
    </section>
  );
}
