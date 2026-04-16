import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4" />
          Powered by Next-Gen AI Technology
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Build Smarter with{' '}
          <span className="gradient-text">Artificial Intelligence</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Site transforms the way you work. Automate tasks, generate content, and unlock
          insights — all powered by cutting-edge AI that learns and adapts to your needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-violet-500/25 text-base">
            Start for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 bg-white/5 hover:bg-white/10 text-base">
            <Play className="w-4 h-4 fill-current" />
            Watch Demo
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['bg-violet-500', 'bg-blue-500', 'bg-emerald-500', 'bg-pink-500'].map((color, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${color} border-2 border-[#050816] flex items-center justify-center text-white text-xs font-bold`}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>10,000+ users trust AI Site</span>
          </div>
          <span className="hidden sm:block text-slate-700">•</span>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5 rating</span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-16 relative animate-float">
          <div className="bg-gradient-to-b from-[#0f1629] to-[#0a0f1e] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 bg-white/5 rounded-md h-6 ml-2" />
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                </div>
                <div className="bg-white/5 rounded-xl rounded-tl-none p-3 text-sm text-slate-300 text-left">
                  Hello! I'm your AI assistant. I can help you write, analyze, code, and much more. What would you like to create today?
                </div>
              </div>
              <div className="flex gap-3 items-start justify-end">
                <div className="bg-violet-600/20 border border-violet-500/20 rounded-xl rounded-tr-none p-3 text-sm text-violet-200 text-left max-w-xs">
                  Write a product description for a smart home device.
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-blue-300">
                  U
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                </div>
                <div className="bg-white/5 rounded-xl rounded-tl-none p-3 text-sm text-slate-300 text-left">
                  <span className="text-emerald-400 font-medium">Generating...</span> Introducing the SmartHome Hub — your home's intelligent command center...
                  <span className="inline-block w-1.5 h-4 bg-violet-400 ml-1 animate-pulse align-middle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
