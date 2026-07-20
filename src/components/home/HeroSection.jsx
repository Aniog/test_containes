import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <p id="hero-subtitle" className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">
            Demi-Fine Gold Jewelry
          </p>
          <h1 id="hero-title" className="serif-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[1.1] mb-8">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-base lg:text-lg text-primary-foreground/80 mb-10 max-w-md leading-relaxed">
            Everyday luxury in 18K gold plated pieces. Designed for the woman who appreciates quiet elegance.
          </p>
          <Link to="/shop" className="inline-block bg-accent text-accent-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  );
}
