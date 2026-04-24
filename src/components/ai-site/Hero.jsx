import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] pt-20">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

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
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">Now in Public Beta</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Build Smarter with{' '}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Site empowers you to create, automate, and scale your digital presence using cutting-edge AI — no coding required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/30 text-base">
            Start for Free <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-white font-medium px-6 py-3.5 rounded-full border border-white/10 hover:border-white/30 transition-all text-base">
            <Play className="w-4 h-4 fill-current" /> Watch Demo
          </button>
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-violet-900/30">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-gray-500 text-xs font-mono">ai-site.app/dashboard</span>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4 min-h-[220px]">
              {[
                { label: 'Pages Generated', value: '1,284', color: 'from-violet-500 to-fuchsia-500' },
                { label: 'AI Requests', value: '48.2K', color: 'from-cyan-500 to-blue-500' },
                { label: 'Uptime', value: '99.9%', color: 'from-emerald-500 to-teal-500' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col gap-2">
                  <div className={`w-8 h-1.5 rounded-full bg-gradient-to-r ${stat.color}`} />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Glow under card */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-violet-600/30 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
