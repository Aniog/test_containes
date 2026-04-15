import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-700/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-purple-600/15 rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4" />
          Powered by Next-Gen AI
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Build Smarter with{' '}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            AI Site
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Create stunning, intelligent websites in minutes. AI Site harnesses the power of
          artificial intelligence to design, write, and optimize your online presence — automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-violet-900/40">
            Start Building Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all">
            Watch Demo
          </button>
        </div>

        <p className="text-gray-600 text-sm mt-6">No credit card required · Free forever plan available</p>

        {/* Hero visual */}
        <div className="mt-16 relative">
          <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 mx-auto max-w-4xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/60 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 bg-gray-700/60 rounded-md h-6 flex items-center px-3">
                <span className="text-gray-500 text-xs">aisite.io/my-website</span>
              </div>
            </div>
            <div className="p-6 md:p-10 grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-3">
                <div className="h-6 bg-gradient-to-r from-violet-500/40 to-indigo-500/20 rounded-lg w-3/4" />
                <div className="h-4 bg-white/10 rounded-lg w-full" />
                <div className="h-4 bg-white/10 rounded-lg w-5/6" />
                <div className="h-4 bg-white/10 rounded-lg w-4/6" />
                <div className="mt-4 flex gap-3">
                  <div className="h-9 w-28 bg-gradient-to-r from-violet-600/70 to-indigo-600/70 rounded-lg" />
                  <div className="h-9 w-24 bg-white/10 rounded-lg" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-xl border border-violet-500/20" />
                <div className="h-16 bg-white/5 rounded-xl border border-white/10" />
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-3 mt-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-violet-600/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
