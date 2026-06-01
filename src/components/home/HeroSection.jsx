import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles } from 'lucide-react';
import ConstellationCanvas from './ConstellationCanvas';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Constellation canvas */}
      <ConstellationCanvas />

      {/* Nebula glow layers */}
      <div className="absolute inset-0 nebula-glow-purple pointer-events-none" />
      <div className="absolute inset-0 nebula-glow-blue pointer-events-none" />
      <div className="absolute inset-0 nebula-glow-gold pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nebula-600/40 bg-nebula-600/10 mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-nebula-400" />
          <span className="font-mono text-xs text-nebula-400 tracking-widest uppercase">
            Global Memory Preservation Initiative
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-cinzel font-bold text-5xl md:text-7xl lg:text-8xl text-slate-100 leading-tight mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <span className="text-glow-nebula text-nebula-300">Every Memory</span>
          <br />
          <span className="text-slate-200">Deserves</span>
          <br />
          <span className="text-glow-gold text-gold-300">Eternity</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Before humanity crosses the stars, we preserve what made us human.
          Explore <span className="text-nebula-400">847 million memories</span> spanning
          5,100 years of civilization — organized by era, location, emotion, and life event.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <Link
            to="/explore"
            className="px-8 py-4 rounded-xl bg-nebula-600 hover:bg-nebula-700 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] w-full sm:w-auto text-center"
          >
            Explore the Archive
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 rounded-xl border border-slate-600 hover:border-star-500 text-slate-300 hover:text-star-400 font-semibold text-base transition-all duration-300 w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>

        {/* Live counter */}
        <div
          className="mt-14 flex items-center justify-center gap-2 animate-fade-in"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <div className="w-2 h-2 rounded-full bg-hope-400 animate-pulse" style={{ backgroundColor: '#34d399' }} />
          <span className="font-mono text-xs text-slate-500 tracking-widest">
            ARCHIVE ACTIVE · 847,203,441 MEMORIES PRESERVED
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-600" />
      </div>
    </section>
  );
}
