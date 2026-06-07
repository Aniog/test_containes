import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Zap } from 'lucide-react';
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
      <div className="absolute inset-0 z-10 bg-slate-950/75" />
      {/* Radial glow */}
      <div className="absolute inset-0 z-10 bg-radial-teal" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Zap className="w-3.5 h-3.5" />
          <span>Discover the invisible universe</span>
        </div>

        {/* Heading */}
        <h1
          id="hero-title"
          className="font-grotesk font-bold text-5xl md:text-7xl text-slate-100 leading-tight mb-6"
        >
          The World{' '}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Too Small
          </span>{' '}
          to See
        </h1>

        <p
          id="hero-subtitle"
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Dive into the microscopic realm — where bacteria build cities, viruses rewrite DNA,
          and single cells wage epic battles for survival. Welcome to MicroCosmos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-teal-500/20"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/science"
            className="flex items-center gap-2 border border-teal-500/40 text-teal-400 hover:bg-teal-500/10 px-8 py-3.5 rounded-full transition-all duration-200"
          >
            <Microscope className="w-4 h-4" />
            Read the Science
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '10³⁰', label: 'Microbes on Earth' },
            { value: '99%', label: 'Undiscovered species' },
            { value: '3.8B', label: 'Years of evolution' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-grotesk font-bold text-2xl md:text-3xl text-teal-400">{stat.value}</div>
              <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20" />
    </section>
  );
};

export default HomeHero;
