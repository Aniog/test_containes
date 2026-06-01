import { useNavigate } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

export default function HomeHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-space-black">
      {/* Constellation background */}
      <ConstellationCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(5,8,16,0)_0%,_rgba(5,8,16,0.6)_60%,_rgba(5,8,16,0.95)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nebula-blue/30 bg-nebula-blue/10 text-nebula-blue text-sm font-inter">
          <span className="w-2 h-2 rounded-full bg-aurora-teal animate-pulse" />
          Global Memory Preservation Initiative · Est. 2051
        </div>

        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-wide">
          <span className="block">Every Memory</span>
          <span className="block bg-gradient-to-r from-nebula-blue via-aurora-teal to-cosmic-violet bg-clip-text text-transparent">
            A Star
          </span>
        </h1>

        <p className="font-inter text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Before humanity crosses the stars, we preserve what made us human.
          Explore millions of memories — from ancient harvests to digital dawns —
          archived for the generations who will never see Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-4 bg-nebula-blue text-white font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(79,142,247,0.4)] hover:shadow-[0_0_50px_rgba(79,142,247,0.6)] font-inter"
          >
            Explore the Archive
          </button>
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-full hover:border-aurora-teal hover:text-aurora-teal transition-all duration-300 font-inter"
          >
            Submit Your Memory
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: STATS.totalMemories, label: 'Memories Archived' },
            { value: STATS.contributors, label: 'Contributors' },
            { value: STATS.languages, label: 'Languages' },
            { value: STATS.yearsSpanned, label: 'Years of History' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-2xl md:text-3xl font-bold text-stardust-gold mb-1">
                {stat.value}
              </div>
              <div className="font-inter text-xs text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
