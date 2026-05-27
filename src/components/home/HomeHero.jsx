import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          The Invisible Universe
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-slate-100">Welcome to</span>
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            MicroCosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the breathtaking world of microorganisms — the ancient, invisible life forms that shape every ecosystem on Earth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/30"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            Learn the Science
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
