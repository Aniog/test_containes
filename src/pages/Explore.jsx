// flat fresh theme
import ExploreGrid from '@/components/explore/ExploreGrid';

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#F5FAF8] pt-16">
      {/* Page Header */}
      <div className="bg-white border-b border-[#D9EDE8] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-3 block">
            The Microbial Kingdom
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#2C3E50] mb-3">
            Explore Microorganisms
          </h1>
          <p className="text-[#7F8C8D] max-w-xl mx-auto">
            Discover the diverse kingdoms of microscopic life — from ancient bacteria to complex protozoa — each with a unique story to tell.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <ExploreGrid />
      </div>
    </div>
  );
};

export default Explore;

