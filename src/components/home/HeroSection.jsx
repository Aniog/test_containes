import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Zap, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-[#0a0e1a]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
          <Zap className="w-3 h-3" />
          Discover the Invisible World
        </div>

        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
          The Hidden Universe of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            Microorganisms
          </span>
        </h1>

        <p id="hero-subtitle" className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Dive into the microscopic world teeming with life — bacteria, viruses, fungi, and more. Explore the science that shapes our planet and our bodies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/20"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/science"
            className="flex items-center gap-2 border border-slate-600 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 font-medium px-8 py-4 rounded-xl transition-all duration-200"
          >
            <Microscope className="w-4 h-4" />
            Read the Science
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '10³⁰', label: 'Microbes on Earth' },
            { value: '99%', label: 'Species Undiscovered' },
            { value: '3.8B', label: 'Years of Evolution' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <Globe className="w-4 h-4 animate-pulse" />
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
