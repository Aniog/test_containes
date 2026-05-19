import ExploreGrid from '@/components/explore/ExploreGrid';

export default function Explore() {
  return (
    <div className="min-h-screen bg-[#050d1a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">Explore</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            The Micro<span className="text-cyan-400">verse</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            Browse through the diverse kingdoms of microscopic life. Filter by category to discover bacteria, viruses, cells, fungi, crystals, and plankton.
          </p>
        </div>

        <ExploreGrid />
      </div>
    </div>
  );
}
