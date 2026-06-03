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
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0e]/70 via-[#050a0e]/50 to-[#050a0e]" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 z-10 bg-grid opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl z-10 pulse-ring" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-emerald-400/5 blur-3xl z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Exploring the Invisible Universe
        </div>

        <h1
          id="hero-title"
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-slate-50 leading-tight tracking-tight mb-6"
        >
          The World{' '}
          <span className="gradient-text">Beneath</span>
          <br />
          the Lens
        </h1>

        <p
          id="hero-subtitle"
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Dive into the breathtaking realm of microorganisms — the ancient, invisible architects of all life on Earth. From bacteria to viruses, discover the cosmos within a single drop of water.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-cyan-400/40 text-cyan-400 font-semibold text-sm hover:bg-cyan-400/10 hover:border-cyan-400/70 transition-all duration-200"
          >
            View Gallery
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '10³⁰', label: 'Microbes on Earth' },
            { value: '3.8B', label: 'Years of Evolution' },
            { value: '99%', label: 'Undiscovered Species' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-cyan-400">{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-slate-500 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HomeHero;
