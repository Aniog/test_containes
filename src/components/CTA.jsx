import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-gray-950 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-700/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 bg-gray-900 border border-white/10 rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to build your{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              AI-powered site?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join over 500,000 creators who have already launched with AI Site. Start free — no credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-violet-900/40">
              Get Started for Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
