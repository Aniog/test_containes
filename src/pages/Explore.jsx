import { Microscope } from 'lucide-react';
import ExploreGallery from '@/components/explore/ExploreGallery';

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#050b18]">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="orb w-80 h-80 bg-cyan-500/15 top-0 right-1/4 animate-pulse-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <Microscope className="w-3 h-3" />
            Organism Gallery
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
            Explore the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Microbial World
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse our curated collection of microorganisms. Filter by category, search by name, 
            and discover the extraordinary diversity of microscopic life.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ExploreGallery />
      </div>
    </div>
  );
};

export default Explore;
