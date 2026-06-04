import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
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
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cosmos-black/80 via-cosmos-black/60 to-cosmos-black" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Dots background */}
      <div className="absolute inset-0 dots-bg opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          Exploring the Invisible World
        </div>

        <h1
          id="hero-title"
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-slate-50 leading-tight mb-6"
        >
          The Hidden{' '}
          <span className="gradient-text">Universe</span>{' '}
          Within
        </h1>

        <p
          id="hero-subtitle"
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Dive into the breathtaking world of microscopic life — where bacteria dance,
          cells communicate, and entire ecosystems thrive beyond the reach of the naked eye.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-cyan-400 text-cosmos-black font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-500/30 group"
          >
            Begin Exploring
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 border border-cyan-400/50 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400/10 transition-all duration-200"
          >
            View Gallery
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '8.7M', label: 'Species' },
            { value: '0.001mm', label: 'Scale' },
            { value: '3.8B', label: 'Years of Life' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-2xl md:text-3xl text-cyan-400">{stat.value}</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
