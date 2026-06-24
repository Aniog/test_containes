import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Particle = ({ style }) => (
  <div
    className="absolute rounded-full bg-cyan-400 animate-pulse-glow"
    style={style}
  />
);

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  style: {
    width: `${Math.random() * 4 + 2}px`,
    height: `${Math.random() * 4 + 2}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.6 + 0.2,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${Math.random() * 3 + 2}s`,
  },
}));

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('intro');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #061428 0%, #030b18 70%)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-mc-7f3a2b"
        data-strk-bg="[hero-subtitle-mc] [hero-title-mc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030b18]/40 to-[#030b18]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}

      {/* Decorative rings */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-cyan-500/10 animate-spin-slow" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-teal-500/10" style={{ animation: 'spin-slow 30s linear infinite reverse' }} />
      <div className="absolute w-[200px] h-[200px] rounded-full border border-emerald-500/15 animate-spin-slow" style={{ animationDuration: '15s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8 tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          The Hidden Universe
        </div>

        <h1
          id="hero-title-mc"
          className="font-space text-7xl md:text-9xl font-bold mb-6 leading-none tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="gradient-text">Micro</span>
          <span className="text-sky-50">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle-mc"
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Dive into the invisible world teeming beneath our feet — a universe of
          extraordinary life, invisible to the naked eye yet essential to all existence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToNext}
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#030b18] font-semibold text-lg transition-all duration-300 glow-cyan"
          >
            Explore the World
          </button>
          <a
            href="#organisms"
            className="px-8 py-4 rounded-full border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-all duration-300"
          >
            Meet the Organisms
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
