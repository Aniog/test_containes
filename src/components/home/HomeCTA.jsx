import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#050d1a]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0f1f38] via-[#0a1628] to-[#0f1f38] border border-[#00d4c8]/20 p-12 sm:p-16 overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#00d4c8]/10 blur-3xl rounded-full pointer-events-none" />

          <span className="text-xs uppercase tracking-widest font-semibold text-[#00d4c8] mb-4 block">
            Begin Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 mb-6 leading-tight">
            Ready to Explore the{' '}
            <span className="text-gradient-teal">Invisible World?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Thousands of microscopic species await your discovery. Dive into our curated collection of organisms, images, and scientific insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#00d4c8] text-[#050d1a] font-semibold hover:bg-[#00bfb4] transition shadow-[0_0_30px_rgba(0,212,200,0.25)]"
            >
              Explore Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-slate-300 font-semibold hover:border-slate-500 hover:text-slate-50 transition"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
