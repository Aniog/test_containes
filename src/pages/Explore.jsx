import ExploreFeatured from '@/components/explore/ExploreFeatured';
import ExploreGallery from '@/components/explore/ExploreGallery';
import { Microscope } from 'lucide-react';

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#050d1a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-900/50 text-teal-300 border border-teal-700 rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            <Microscope className="w-3.5 h-3.5" />
            <span>Specimen Collection</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Explore the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300"> MicroCosmos</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse our curated collection of microscopic imagery — from bacteria and crystals to cells and fungi. Filter by category or search for a specific specimen.
          </p>
        </div>

        <ExploreFeatured />
        <ExploreGallery />
      </div>
    </div>
  );
};

export default Explore;
