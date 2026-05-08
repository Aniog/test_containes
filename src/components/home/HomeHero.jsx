import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      {/* Dashed grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Dashed accent lines */}
        <div className="absolute top-1/4 left-0 right-0 border-t border-dashed border-slate-200/60" />
        <div className="absolute bottom-1/4 left-0 right-0 border-t border-dashed border-slate-200/60" />
        <div className="absolute top-0 bottom-0 left-1/4 border-l border-dashed border-slate-200/60" />
        <div className="absolute top-0 bottom-0 right-1/4 border-l border-dashed border-slate-200/60" />
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Powered by Advanced AI
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
            Build websites that{' '}
            <span className="text-gradient-accent">think for you</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
            NexusAI transforms your ideas into fully functional, beautifully designed websites in minutes — no code, no compromise.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/product"
              className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-200"
            >
              Start Building Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all bg-white"
            >
              View Pricing
            </Link>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-sm text-slate-400">
            Trusted by <span className="text-slate-700 font-semibold">12,000+</span> businesses worldwide
          </p>
        </div>

        {/* Hero image */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="dashed-border rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop"
              alt="AI-powered website builder interface"
              className="w-full h-[400px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl" />
          </div>
          {/* Floating stat cards */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden md:block">
            <p className="text-xs text-slate-500 font-medium">Sites Built</p>
            <p className="text-2xl font-bold text-slate-900">48,291</p>
          </div>
          <div className="absolute -right-4 top-1/3 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 hidden md:block">
            <p className="text-xs text-slate-500 font-medium">Avg. Build Time</p>
            <p className="text-2xl font-bold text-indigo-600">4 min</p>
          </div>
        </div>
      </div>
    </section>
  )
}
