import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCallToAction = () => {
  return (
    <section className="py-20 bg-[#3DBFA8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-5">
          The Gallery Awaits
        </span>
        <h2 id="cta-title" className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
          See the Unseen World<br />in Stunning Detail
        </h2>
        <p id="cta-subtitle" className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Browse our curated gallery of microscopy images — from electron micrographs to fluorescence photography of living cells.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-white text-[#2C3E50] font-semibold px-7 py-3 rounded-lg hover:bg-[#F5FAF8] transition-colors"
          >
            Open Gallery <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
          >
            Learn about our mission →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;

