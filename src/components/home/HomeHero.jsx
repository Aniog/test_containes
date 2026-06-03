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
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-milkyway-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 z-10 bg-[#0B0F19]/70" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B0F19]/30 via-transparent to-[#0B0F19]" />
      <div className="absolute inset-0 z-10 bg-nebula-gradient" />

      {/* Animated star dots */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-indigo-300">Physics Education</span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-6"
        >
          The Universe
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-indigo-400 to-cyan-400">
            Awaits Your Gaze
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          From Van Gogh's swirling night sky to the physics of stellar evolution —
          explore the cosmos through the lens of science, wonder, and discovery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/knowledge"
            className="group flex items-center gap-3 px-8 py-4 bg-amber-400 text-[#0B0F19] rounded-full font-medium text-sm hover:bg-amber-300 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]"
          >
            Begin Exploring
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full text-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            View Sky Gallery
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10">
          {[
            { value: '93B', label: 'Light-years across' },
            { value: '2T+', label: 'Galaxies estimated' },
            { value: '13.8B', label: 'Years since Big Bang' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-light text-amber-400">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
