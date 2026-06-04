import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050b18]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative bg-[#0d1526] border border-cyan-500/20 rounded-3xl p-12 md:p-16 overflow-hidden glow-cyan">
          {/* Background orbs */}
          <div className="orb w-64 h-64 bg-cyan-500/15 -top-16 -left-16" />
          <div className="orb w-48 h-48 bg-violet-500/10 -bottom-12 -right-12" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-3 h-3" />
              Begin Your Journey
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-100 mb-6 leading-tight">
              Ready to Explore the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Invisible?
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Dive into our curated gallery of microorganisms, read cutting-edge research, 
              and discover the universe that exists just beyond your sight.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#050b18] font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-cyan-500/25 text-base"
              >
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-full transition-all text-base"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
