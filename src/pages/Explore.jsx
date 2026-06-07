import ExploreGallery from '@/components/explore/ExploreGallery';
import { Microscope } from 'lucide-react';

const Explore = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
            <Microscope className="w-5 h-5 text-teal-400" />
          </div>
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Gallery</span>
        </div>
        <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 mb-4">
          Explore Micro-Organisms
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Browse our curated collection of microscopic life — from ancient bacteria to bizarre extremophiles.
          Filter by category or search for a specific organism.
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ExploreGallery />
      </div>
    </div>
  );
};

export default Explore;
