import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-dark/70 via-cosmos-dark/50 to-cosmos-dark" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
          <span className="font-display text-cosmos-teal text-lg font-semibold tracking-widest uppercase">MicroCosmos</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-cosmos-muted text-sm font-sans tracking-wide">
          <a href="#explore" className="hover:text-cosmos-teal transition-colors">Explore</a>
          <a href="#gallery" className="hover:text-cosmos-teal transition-colors">Gallery</a>
          <a href="#specimens" className="hover:text-cosmos-teal transition-colors">Specimens</a>
          <a href="#facts" className="hover:text-cosmos-teal transition-colors">Facts</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold mb-6">
          The Invisible Universe
        </p>
        <h1
          id="hero-title"
          className="font-display font-bold text-cosmos-text leading-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          Micro<span className="text-cosmos-teal">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-cosmos-muted text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Journey into the breathtaking world invisible to the naked eye — where cells dance, crystals bloom, and life pulses in extraordinary forms.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#explore"
            className="px-8 py-3 bg-cosmos-teal text-cosmos-dark font-sans font-semibold rounded-full hover:bg-cosmos-glow transition-colors text-sm tracking-wide"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 border border-cosmos-border text-cosmos-text font-sans font-semibold rounded-full hover:border-cosmos-teal hover:text-cosmos-teal transition-colors text-sm tracking-wide"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-cosmos-muted text-xs uppercase tracking-widest font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-teal to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
