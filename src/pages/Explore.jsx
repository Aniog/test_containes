import ExploreGrid from '@/components/explore/ExploreGrid';

const Explore = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
            The specimen library
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-microtext mb-4">
            Explore the Microcosmos
          </h1>
          <p className="text-micromuted text-base md:text-lg max-w-2xl leading-relaxed">
            Browse our curated collection of microscopic specimens — from bacteria and viruses
            to crystals and parasites. Filter by category or search by name.
          </p>
        </div>
        <ExploreGrid />
      </div>
    </div>
  );
};

export default Explore;
