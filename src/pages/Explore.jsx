import Layout from '../components/layout/Layout';
import ExploreGallery from '../components/explore/ExploreGallery';
import { Microscope } from 'lucide-react';

const Explore = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            <Microscope className="w-3.5 h-3.5" />
            Organism Gallery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Explore the Micro-World
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Browse our curated collection of microscopic organisms — from ancient bacteria to complex protozoa. Filter by category or search for a specific species.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 md:px-8 bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <ExploreGallery />
        </div>
      </section>
    </Layout>
  );
};

export default Explore;
