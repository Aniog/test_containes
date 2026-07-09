import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

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
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/60 via-[#050a0f]/40 to-[#050a0f]" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          The Invisible World
        </div>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6 leading-none"
        >
          Micro
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Cosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the naked eye —
          where cells dance, crystals bloom, and life pulses in extraordinary forms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-cyan-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-cyan-400 transition-all duration-300 text-base"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-500/10 transition-all duration-300 text-base"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
