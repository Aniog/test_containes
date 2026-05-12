import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import StarField from './StarField';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.35 }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos/60 via-void/40 to-void pointer-events-none" />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Star field */}
      <StarField count={150} />

      {/* Floating orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber/3 blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber" />
          <span className="text-xs font-medium tracking-widest uppercase text-amber">
            Physics Education · Astronomy
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber" />
        </div>

        {/* Main headline */}
        <h1
          id="hero-title"
          className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-star leading-tight tracking-tight mb-6 animate-fade-in delay-100 glow-amber"
        >
          The Starry Night
        </h1>

        {/* Subtitle — also used as image search context */}
        <p
          id="hero-subtitle"
          className="font-serif italic text-xl md:text-2xl text-aurora/80 mb-4 animate-fade-in delay-200"
        >
          Where physics meets the infinite cosmos
        </p>

        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in delay-300">
          Journey through the cosmos with your physics teacher. Explore constellations, stellar evolution, and the instruments that reveal the universe's deepest secrets.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-400">
          <Link
            to="/knowledge"
            className="px-8 py-3.5 bg-amber text-cosmos font-semibold text-sm rounded-full hover:bg-amber/90 transition-all duration-300 hover:shadow-xl hover:shadow-amber/20 hover:scale-105"
          >
            Begin Exploring
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-3.5 border border-amber/30 text-amber text-sm font-medium rounded-full hover:bg-amber/10 hover:border-amber/60 transition-all duration-300"
          >
            View Sky Gallery
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-dim tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-dim" />
      </div>
    </section>
  );
}
