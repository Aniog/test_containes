import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0f1629' }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative p-12 rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 relative z-10">
            Ready to Explore the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Microbial Universe?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 relative z-10">
            Browse our gallery of hundreds of microorganisms, each with detailed scientific profiles and stunning microscopy imagery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/20"
            >
              Explore Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="text-slate-400 hover:text-teal-400 font-medium px-8 py-4 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
