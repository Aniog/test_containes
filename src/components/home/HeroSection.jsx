import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-8">
        <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
          Explore the Invisible World
        </div>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-[#f0f8ff] mb-6 leading-none"
        >
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the lens — where bacteria dance, viruses evolve, and life thrives in forms beyond imagination.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('explore')}
            className="bg-[#00d4ff] text-[#050d1a] font-bold px-10 py-4 rounded-full hover:bg-white transition-all duration-300 text-lg shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)]"
          >
            Begin Exploring
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="border border-[#00d4ff] text-[#00d4ff] px-10 py-4 rounded-full hover:bg-[#00d4ff]/10 transition-all duration-300 text-lg"
          >
            View Gallery
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 text-sm">
        <span>Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4ff]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
