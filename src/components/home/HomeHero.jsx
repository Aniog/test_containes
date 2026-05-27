import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4ff]/5 blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center pt-24 pb-16">
        <span className="inline-block text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-6 border border-[rgba(0,212,255,0.3)] rounded-full px-4 py-1.5">
          The Invisible Universe
        </span>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#e8f4f8] mb-6 drop-shadow-[0_0_40px_rgba(0,212,255,0.3)]"
        >
          Welcome to<br />
          <span className="text-[#00d4ff] drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">MicroCosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-[#8ab4c8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the breathtaking world of microorganisms — the ancient, invisible architects of all life on Earth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] font-bold rounded-full px-8 py-3.5 hover:bg-[#00ffcc] transition-colors shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Start Exploring <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 border border-[#00d4ff] text-[#00d4ff] rounded-full px-8 py-3.5 hover:bg-[rgba(0,212,255,0.1)] transition-colors"
          >
            Learn the Science
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '10³⁰', label: 'Microbes on Earth' },
            { value: '3.8B', label: 'Years of Evolution' },
            { value: '99%', label: 'Undiscovered Species' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#00d4ff]">{stat.value}</div>
              <div className="text-xs text-[#4a7a94] mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#4a7a94]" />
      </div>
    </section>
  );
};

export default HomeHero;
