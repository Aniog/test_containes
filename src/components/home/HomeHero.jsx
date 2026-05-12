import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
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
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-a1b2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0e1a]/60 via-[#0a0e1a]/30 to-[#0a0e1a]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0e1a]/50 via-transparent to-[#0a0e1a]/30" />

      {/* Star particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.2,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs font-mono tracking-[0.4em] uppercase text-[#f5c842] mb-6 opacity-90">
          Physics · Astronomy · Wonder
        </p>

        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-[#f0f4ff] mb-6 leading-[1.1]">
          The Starry Night
          <br />
          <em className="text-[#f5c842] not-italic">& the Cosmos</em>
        </h1>

        <p id="hero-subtitle" className="text-[#8892b0] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Explore the physics behind the universe — from the celestial coordinates
          that map our sky, to the life and death of stars, to the telescopes that
          reveal what our eyes cannot see.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/knowledge"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f5c842] text-[#0a0e1a] font-semibold rounded-full hover:bg-amber-300 transition-all duration-300 shadow-[0_0_40px_rgba(245,200,66,0.3)] hover:shadow-[0_0_60px_rgba(245,200,66,0.5)] text-sm"
          >
            Begin Exploring
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#f0f4ff]/20 text-[#f0f4ff] rounded-full hover:bg-[#f0f4ff]/5 hover:border-[#f0f4ff]/40 transition-all duration-300 text-sm"
          >
            View Sky Gallery
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#4a5568]">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
