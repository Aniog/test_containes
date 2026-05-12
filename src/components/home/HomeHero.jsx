import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image — Orion Nebula / star-forming region, deep space, vibrant nebula colors */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-orion-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-void/60 via-cosmos-void/40 to-cosmos-void/90" />

      {/* Subtle star field overlay */}
      <div className="absolute inset-0 z-10 star-field opacity-30" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 text-center">

        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-glow/30 bg-amber-glow/5 mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber-glow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
            Physics of the Cosmos
          </span>
        </div>

        {/* Main headline */}
        <h1
          id="hero-title"
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-star-white leading-[0.95] tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          The Universe<br />
          <span className="text-amber-gradient">Is Your Classroom</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-cosmos-text max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          Explore the physics behind the night sky — from stellar evolution and celestial coordinates to the invisible light that reveals the cosmos.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Link
            to="/knowledge"
            className="group flex items-center gap-2 px-7 py-3.5 bg-amber-glow hover:bg-amber-bright text-cosmos-void font-semibold text-sm rounded-xl transition-all duration-300 shadow-amber-glow hover:shadow-amber-glow hover:scale-105"
          >
            Begin Exploring
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 px-7 py-3.5 border border-cosmos-border hover:border-cosmos-muted bg-cosmos-surface/40 hover:bg-cosmos-surface/70 text-cosmos-text hover:text-star-white text-sm font-medium rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            View Gallery
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 animate-fade-in-up"
          style={{ animationDelay: '0.55s' }}
        >
          {[
            { value: '13.8B', label: 'Years — Age of Universe' },
            { value: '2 Trillion', label: 'Galaxies Observable' },
            { value: '299,792', label: 'km/s — Speed of Light' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-amber-glow">{value}</div>
              <div className="text-xs text-cosmos-subtle mt-1 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-cosmos-subtle uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cosmos-subtle" />
      </div>
    </section>
  );
}
