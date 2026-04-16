import { Brain, ChevronDown } from 'lucide-react';

const AIHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050816]">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.07)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm">
            <Brain className="w-12 h-12 text-indigo-400" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          The Future Is Now
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Artificial
          <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Exploring the technology that is reshaping humanity — from machine learning
          and neural networks to the systems that think, learn, and create.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#what-is-ai"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Explore AI
          </a>
          <a
            href="#timeline"
            className="px-8 py-3 rounded-full border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold transition-all duration-300"
          >
            View Timeline
          </a>
        </div>
      </div>

      <a
        href="#what-is-ai"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default AIHero;
