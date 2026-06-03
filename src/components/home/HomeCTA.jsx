import { Link } from 'react-router-dom';
import { ArrowRight, Microscope } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050a0e]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl bg-[#0a1628] border border-cyan-900/40 p-12 md:p-16 overflow-hidden glow-cyan">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-emerald-400/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto mb-6 float-anim">
              <Microscope className="w-8 h-8 text-cyan-400" />
            </div>

            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4">
              Ready to Explore the{' '}
              <span className="gradient-text">Invisible?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Journey through the microscopic cosmos — from the bacteria in your gut to the ancient archaea thriving in volcanic springs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_30px_rgba(0,212,255,0.3)]"
              >
                Explore Organisms
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
