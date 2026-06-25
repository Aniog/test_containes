import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Discover the Invisible Universe</span>
        </div>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-bold text-slate-50 tracking-tight leading-none mb-6"
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking world of microscopic life — where single cells
          build civilizations and invisible organisms shape our planet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#explore"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] text-base"
          >
            Begin Exploration
          </a>
          <a
            href="#organisms"
            className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
          >
            View Organisms
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}
