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
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-mc-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4c8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4c8]/10 border border-[#00d4c8]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00d4c8] animate-pulse" />
          <span className="text-[#00d4c8] text-xs font-semibold uppercase tracking-widest">
            The Invisible Universe
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-50 mb-6 leading-none"
        >
          Welcome to the{' '}
          <span className="text-gradient-teal">MicroCosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the breathtaking world of microscopic life — bacteria, viruses, fungi, and protozoa that shape every living thing on Earth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#00d4c8] text-[#050d1a] font-semibold text-base hover:bg-[#00bfb4] transition shadow-[0_0_30px_rgba(0,212,200,0.3)]"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-slate-300 font-semibold text-base hover:border-[#00d4c8]/50 hover:text-[#00d4c8] transition"
          >
            View Gallery
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: '10,000+', label: 'Species' },
            { value: '99%', label: 'Invisible to eye' },
            { value: '3.8B', label: 'Years of life' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#00d4c8]">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
};

export default HomeHero;
