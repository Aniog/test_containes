import ExploreGallery from '@/components/explore/ExploreGallery';

const Explore = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 block">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Explore the Microbial World
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse our curated collection of microorganisms — filter by category, search by name, and discover the extraordinary diversity of microscopic life.
          </p>
        </div>
        <ExploreGallery />
      </div>
    </div>
  );
};

export default Explore;
