import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

const formatNumber = (n) => n.toLocaleString();

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-space-black">
      <ConstellationCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,21,48,0.4)_0%,rgba(5,8,16,0.8)_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nebula-blue/30 bg-nebula-blue/10 text-nebula-blue text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-nebula-blue animate-pulse" />
          Interstellar Migration Initiative — Memory Preservation Project
        </div>

        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Every Memory
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-blue via-aurora-teal to-stellar-gold">
            Must Survive
          </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Before humanity crosses the stars, we preserve what made us human.
          Millions of memories — from ancient harvests to lunar births — archived
          for the generations who will never see Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/explore"
            className="px-8 py-4 rounded-xl bg-nebula-blue text-white font-semibold text-base hover:bg-blue-500 transition-all hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] active:scale-95"
          >
            Explore the Archive
          </Link>
          <Link
            to="/submit"
            className="px-8 py-4 rounded-xl border border-slate-600 text-slate-300 font-semibold text-base hover:border-nebula-blue hover:text-nebula-blue transition-all active:scale-95"
          >
            Preserve a Memory
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {[
            { value: formatNumber(STATS.totalMemories), label: 'Memories Preserved' },
            { value: STATS.countries, label: 'Countries' },
            { value: STATS.languages, label: 'Languages' },
            { value: `${STATS.yearsSpanned.toLocaleString()}+`, label: 'Years of History' },
            { value: formatNumber(STATS.contributors), label: 'Contributors' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-space-navy/60 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="font-cinzel text-xl md:text-2xl font-bold text-nebula-blue">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span className="tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
