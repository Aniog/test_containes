import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ opacity: 0 }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/70 via-cosmos-bg/50 to-cosmos-bg" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cosmos-teal/5 blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cosmos-teal/10 border border-cosmos-teal/30 text-cosmos-teal text-xs font-semibold tracking-widest uppercase mb-6">
          The Invisible World
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-cosmos-text leading-tight mb-6"
        >
          Micro<span className="text-cosmos-teal">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the lens — where bacteria, cells, and microorganisms reveal the true complexity of life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-3.5 rounded-full bg-cosmos-teal text-cosmos-bg font-bold text-base hover:bg-cosmos-cyan transition-colors shadow-[0_0_30px_rgba(0,212,200,0.3)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-3.5 rounded-full border border-cosmos-teal/50 text-cosmos-teal font-bold text-base hover:bg-cosmos-teal/10 transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-cosmos-dim hover:text-cosmos-teal transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
