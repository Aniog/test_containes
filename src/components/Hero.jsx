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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-deep/70 via-cosmos-deep/50 to-cosmos-deep" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20 animate-pulse-slow"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Explore the Invisible</span>
        </div>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black text-white tracking-tight mb-6 leading-none"
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the hidden universe that exists beyond the limits of the naked eye — microscopic life, crystals, cells, and wonders unseen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-cyan-400 text-cosmos-deep font-bold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-cyan-400/60 hover:bg-white/5 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400/60" />
      </div>
    </section>
  );
}
