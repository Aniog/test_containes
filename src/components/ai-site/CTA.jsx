import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-[#050816] py-28 px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />

        <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-16 md:py-20">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Get Started Today</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-5 leading-tight">
            Your AI-powered site is{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              one click away
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Join over 50,000 creators and businesses already building with AI Site. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/30 text-base">
              Start Building for Free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-gray-300 hover:text-white font-medium text-base transition-colors">
              View all features →
            </button>
          </div>

          <p className="text-gray-600 text-xs mt-8">
            Free plan available · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
