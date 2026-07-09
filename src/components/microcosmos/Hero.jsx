import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

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

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cosmos-cyan/5 blur-3xl z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cosmos-violet/10 blur-3xl z-10 animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-cosmos-cyan font-semibold mb-6 font-heading">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="font-heading text-6xl md:text-8xl font-bold mb-6 leading-tight"
          style={{
            background: 'linear-gradient(135deg, #e8f4f8 0%, #00d4ff 50%, #00ffcc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-cosmos-muted text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          A breathtaking journey into the microscopic universe — where bacteria, cells, and crystals reveal the hidden architecture of life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full font-semibold text-cosmos-deep font-heading transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #00ffcc)' }}
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full font-semibold text-cosmos-cyan border border-cosmos-cyan/40 font-heading transition-all duration-300 hover:bg-cosmos-cyan/10 hover:border-cosmos-cyan"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cosmos-dim">
        <span className="text-xs tracking-widest uppercase font-heading">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-cyan/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
