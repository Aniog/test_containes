import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-48 h-24 bg-emerald-500/15 blur-3xl rounded-full" />

          <div className="relative z-10">
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Ready to Explore?</span>
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mt-4 mb-6">
              Dive Into the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Invisible World
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Browse our curated collection of microscopic organisms, stunning imagery, and in-depth scientific profiles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3.5 rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                Explore Organisms
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="flex items-center gap-2 border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-white px-8 py-3.5 rounded-full transition-all"
              >
                Browse Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
