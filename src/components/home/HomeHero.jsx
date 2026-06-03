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
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/80 via-cosmos-bg/60 to-cosmos-bg" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmos-teal/5 blur-3xl animate-pulse-slow z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cosmos-violet/5 blur-3xl animate-pulse-slow z-10" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-cosmos-teal/10 border border-cosmos-teal/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">
            The Invisible Universe
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-cosmos-text leading-tight tracking-tight mb-6"
        >
          Welcome to the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-teal to-cosmos-cyan">
            MicroCosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-cosmos-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Dive into a world invisible to the naked eye — where bacteria build cities, fungi weave underground networks, and viruses reshape the course of life itself.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-cosmos-cyan transition-all duration-200 text-base"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/science"
            className="flex items-center gap-2 border border-cosmos-border text-cosmos-text font-medium px-8 py-4 rounded-full hover:border-cosmos-teal/50 hover:text-cosmos-teal transition-all duration-200 text-base"
          >
            Read the Science
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cosmos-dim animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
