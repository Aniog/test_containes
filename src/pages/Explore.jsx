import ExploreGallery from '@/components/explore/ExploreGallery';

const Explore = () => {
  return (
    <div className="min-h-screen bg-cosmos-bg pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">The Gallery</span>
          <h1 className="text-4xl md:text-5xl font-black text-cosmos-text mt-3 mb-4">
            Explore the Micro-World
          </h1>
          <p className="text-cosmos-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our curated collection of microscopic organisms — from ancient bacteria to shape-shifting protozoa. Filter by category or search for a specific species.
          </p>
        </div>

        <ExploreGallery />
      </div>
    </div>
  );
};

export default Explore;
