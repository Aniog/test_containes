import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
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

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cosmos-teal/10 blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cosmos-purple/10 blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-cosmos-teal mb-6">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 bg-gradient-to-r from-cosmos-teal via-cosmos-cyan to-cosmos-purple bg-clip-text text-transparent leading-none pb-2"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the hidden universe that exists beyond the limits of the naked eye — teeming with life, beauty, and wonder.
        </p>
        <a
          href="#introduction"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cosmos-teal/50 text-cosmos-teal font-semibold hover:bg-cosmos-teal/10 transition-all duration-300 hover:shadow-glow-teal"
        >
          Begin Exploring
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cosmos-muted/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-teal/60 to-transparent" />
      </div>
    </section>
  );
}
