import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Now in public beta — Try it free
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Build smarter with{' '}
          <span className="gradient-text">AI-powered</span>
          <br />intelligence
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Site transforms the way you work. Automate complex tasks, generate insights,
          and create stunning experiences — all powered by cutting-edge artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base shadow-lg shadow-violet-500/25">
            Start for free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base">
            <Play className="w-4 h-4 fill-white" />
            Watch demo
          </button>
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative animate-float">
          <div className="bg-gradient-to-b from-[#0f1535] to-[#0a0f2e] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 bg-white/5 rounded-md h-6 ml-2" />
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-violet-500/30 flex-shrink-0 flex items-center justify-center text-xs text-violet-300 font-bold">AI</div>
                <div className="bg-white/5 rounded-xl rounded-tl-none px-4 py-3 text-sm text-slate-300 text-left">
                  Hello! I'm your AI assistant. How can I help you build something amazing today?
                </div>
              </div>
              <div className="flex gap-3 items-start justify-end">
                <div className="bg-violet-600/30 rounded-xl rounded-tr-none px-4 py-3 text-sm text-slate-200 text-left max-w-xs">
                  Generate a landing page for my SaaS product with a modern dark theme.
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/30 flex-shrink-0 flex items-center justify-center text-xs text-blue-300 font-bold">U</div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-violet-500/30 flex-shrink-0 flex items-center justify-center text-xs text-violet-300 font-bold">AI</div>
                <div className="bg-white/5 rounded-xl rounded-tl-none px-4 py-3 text-sm text-slate-300 text-left">
                  <span className="text-emerald-400">✓</span> Generating your landing page... Done! Here's your modern dark-themed SaaS page with hero, features, and CTA sections.
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-violet-600/20 blur-xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
