import ExploreGrid from '../components/explore/ExploreGrid';

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#050a0e] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
            The Microbial Kingdom
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            Explore{' '}
            <span className="gradient-text">Organisms</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Browse our curated collection of microorganisms — from the bacteria that ferment your food to the viruses that shaped human evolution.
          </p>
        </div>

        <ExploreGrid />
      </div>
    </div>
  );
};

export default Explore;
