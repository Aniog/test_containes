import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmos-black">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-10 bg-cosmos-black/70" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,255,0.12)_0%,transparent_60%)]" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmos-cyan/5 blur-3xl animate-pulse-slow z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cosmos-violet/5 blur-3xl animate-pulse-slow z-10" style={{ animationDelay: '2s' }} />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cosmos-cyan animate-pulse" />
          Discover the Invisible Universe
        </div>

        <h1
          id="hero-title"
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-slate-50 leading-tight mb-6"
        >
          The World
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-cyan to-cosmos-violet">
            Beneath
          </span>
          <br />
          Your Eyes
        </h1>

        <p
          id="hero-subtitle"
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the microscopic realm — where bacteria build cities, viruses wage wars, and single cells perform miracles of life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-cosmos-cyan text-cosmos-black font-semibold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-all duration-200 text-base"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 border border-cyan-400/40 text-cosmos-cyan font-medium px-8 py-3.5 rounded-full hover:bg-cyan-400/10 transition-all duration-200 text-base"
          >
            View Gallery
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          {[
            { value: '10,000+', label: 'Species Documented' },
            { value: '500×', label: 'Magnification Range' },
            { value: '50+', label: 'Research Articles' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-heading font-bold text-2xl text-cosmos-cyan">{value}</div>
              <div className="text-slate-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
