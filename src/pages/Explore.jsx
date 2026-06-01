import ExploreGrid from '../components/explore/ExploreGrid';

export default function Explore() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="relative py-12 rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-space-800/60 border border-slate-700/40 rounded-2xl" />
          <div className="absolute inset-0 nebula-glow-purple opacity-60 rounded-2xl" />

          <div className="relative z-10 text-center">
            <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-3">
              Memory Archive
            </p>
            <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-slate-100 mb-4">
              Explore the Archive
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              Filter by era, location, emotion, or life event. Every memory is a window into a life once lived.
            </p>
          </div>
        </div>
      </div>

      <ExploreGrid />
    </div>
  );
}
