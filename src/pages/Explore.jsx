import ExploreGallery from '@/components/explore/ExploreGallery';

export default function Explore() {
  return (
    <div className="pt-16 bg-[#050d1a] min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
          The Microbial Zoo
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
          Explore Organisms
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Browse our curated collection of microorganisms — from the bacteria in your gut to the extremophiles thriving in volcanic vents.
        </p>
      </div>

      <ExploreGallery />
    </div>
  );
}
