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
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 text-xs font-mono uppercase tracking-widest">The Invisible World</span>
        </div>

        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6 leading-tight">
          Welcome to the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
            MicroCosmos
          </span>
        </h1>

        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dive into the breathtaking universe of microorganisms — the ancient, invisible architects of all life on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-teal-500/25"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 px-7 py-3.5 rounded-lg transition-all duration-200"
          >
            The Science
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default HomeHero;
