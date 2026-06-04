import OrganismGrid from '../components/explore/OrganismGrid';

const Explore = () => {
  return (
    <div style={{ backgroundColor: '#0a0e1a', minHeight: '100vh' }}>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6" style={{ backgroundColor: '#0f1629' }}>
        <div className="max-w-6xl mx-auto">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mt-3 mb-4">
            Explore Microorganisms
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse our curated collection of microorganisms — from ancient bacteria to complex fungi. Each entry includes scientific details, habitat information, and stunning microscopy imagery.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <OrganismGrid />
        </div>
      </div>
    </div>
  );
};

export default Explore;
