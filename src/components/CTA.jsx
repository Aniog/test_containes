import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#07091a]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-emerald-600/10 border border-violet-500/20 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              No credit card required
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to build with AI?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Join over 10,000 teams already using AI Site to automate workflows, generate content, and unlock insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-violet-500/25 text-base w-full sm:w-auto justify-center">
                Start for Free Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                Talk to our team →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
