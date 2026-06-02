import ExploreGrid from '@/components/explore/ExploreGrid';

const Explore = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-cosmos-navy border-b border-cyan-900/30 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-6">
            The Microscopic World
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            Explore Organisms
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse our curated collection of microscopic life forms — from ancient bacteria to complex eukaryotic cells.
          </p>
        </div>
      </div>

      <ExploreGrid />
    </div>
  );
};

export default Explore;
