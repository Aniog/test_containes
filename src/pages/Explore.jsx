import ExploreGrid from '@/components/explore/ExploreGrid';

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#050d1a]">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#0a1628] to-[#050d1a]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4c8]/10 border border-[#00d4c8]/30 mb-6">
            <span className="text-[#00d4c8] text-xs font-semibold uppercase tracking-widest">
              Microorganism Database
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-4 tracking-tight">
            Explore the <span className="text-gradient-teal">Microbial World</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Browse our curated collection of bacteria, viruses, fungi, and protozoa. Filter by category or search for a specific organism.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <ExploreGrid />
      </div>
    </div>
  );
};

export default Explore;
