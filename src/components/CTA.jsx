import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-emerald-600/20 rounded-3xl blur-3xl pointer-events-none" />
        <div className="relative z-10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl px-8 py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Ready to build with{' '}
            <span className="gradient-text">AI Site?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Join thousands of teams already using AI Site to ship faster, work smarter, and create better products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base shadow-lg shadow-violet-500/25">
              Start for free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base">
              Talk to sales
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-6">No credit card required · Free forever plan available</p>
        </div>
      </div>
    </section>
  );
}
