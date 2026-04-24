import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Dashed grid decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Dashed accent lines */}
        <div className="absolute top-1/4 left-0 right-0 border-t border-dashed border-gray-200" />
        <div className="absolute top-3/4 left-0 right-0 border-t border-dashed border-gray-200" />
        <div className="absolute top-0 bottom-0 left-1/4 border-l border-dashed border-gray-200" />
        <div className="absolute top-0 bottom-0 right-1/4 border-l border-dashed border-gray-200" />
      </div>

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-xs font-medium text-gray-600 tracking-wide">Introducing Arcis AI 2.0</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Build websites that
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                think for themselves
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-100 rounded -z-0" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Arcis AI generates, optimizes, and continuously improves your web presence — so you can focus on what matters most.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-700 transition-all text-sm"
            >
              Start for free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-gray-700 font-medium px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all text-sm bg-white"
            >
              See how it works
            </Link>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-xs text-gray-400 tracking-wide">
            Trusted by <span className="text-gray-700 font-semibold">12,000+</span> businesses worldwide · No credit card required
          </p>
        </div>

        {/* Hero image */}
        <div className="mt-16 md:mt-20 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/60">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop"
              alt="AI interface dashboard"
              className="w-full object-cover aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
          {/* Floating stat cards */}
          <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-lg hidden md:block">
            <p className="text-xs text-gray-500">Sites launched today</p>
            <p className="text-2xl font-bold text-gray-900">1,284</p>
          </div>
          <div className="absolute -top-4 -right-4 md:-right-8 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-lg hidden md:block">
            <p className="text-xs text-gray-500">Avg. build time</p>
            <p className="text-2xl font-bold text-gray-900">47s</p>
          </div>
        </div>
      </div>
    </section>
  );
}
