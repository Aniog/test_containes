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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/3 rounded-full blur-3xl" />
      </div>

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-wider uppercase">
            Explore the Invisible World
          </span>
        </div>

        {/* Heading */}
        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-slate-50 mb-6 leading-tight">
          The Hidden{' '}
          <span className="gradient-text">Universe</span>
          <br />
          Within Our World
        </h1>

        {/* Subtitle */}
        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dive into the microscopic realm — where bacteria build cities, viruses wage wars, and single cells perform miracles invisible to the naked eye.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-colors duration-200 text-base"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 border border-cyan-400/60 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400/10 transition-colors duration-200 text-base"
          >
            Read the Science
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-slate-700/50">
          {[
            { value: '10³⁰', label: 'Microbes on Earth' },
            { value: '99%', label: 'Species Undiscovered' },
            { value: '3.8B', label: 'Years of Evolution' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-500 text-xs font-mono-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
