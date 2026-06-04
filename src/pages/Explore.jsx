import ExploreGrid from '@/components/explore/ExploreGrid';

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#050d1a] pt-20">
      {/* Page Header */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#050d1a]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00e5ff]/4 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">
            The Microbial Kingdom
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Explore Microorganisms
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Discover the diverse kingdoms of microscopic life — from ancient bacteria to complex protozoa — each with a unique story to tell.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ExploreGrid />
      </div>
    </div>
  );
};

export default Explore;
