import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050d1a]/60 via-transparent to-[#050d1a]/40" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#00e5ff]/10 border border-[#00e5ff]/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">
            The Invisible Universe
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-none"
        >
          Life at the
          <br />
          <span className="text-[#00e5ff] glow-text">Micro Scale</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the hidden world of microorganisms — the ancient, resilient, and endlessly fascinating life forms that shape our planet and our bodies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-[#00e5ff] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 text-base"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 border border-[#00e5ff]/40 text-[#00e5ff] font-semibold px-8 py-4 rounded-full hover:bg-[#00e5ff]/10 transition-all duration-200 text-base"
          >
            View Gallery
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '10³⁰', label: 'Microbes on Earth' },
            { value: '99%', label: 'Species Undiscovered' },
            { value: '3.8B', label: 'Years of Evolution' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#00e5ff]">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HomeHero;
