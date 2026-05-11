import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Dashed grid decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #6366f1 1px, transparent 1px),
              linear-gradient(to bottom, #6366f1 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Dashed accent lines */}
        <div className="absolute top-1/4 left-0 right-0 border-t border-dashed border-indigo-200/60" />
        <div className="absolute bottom-1/4 left-0 right-0 border-t border-dashed border-indigo-200/60" />
        <div className="absolute top-0 bottom-0 left-1/4 border-l border-dashed border-indigo-200/40" />
        <div className="absolute top-0 bottom-0 right-1/4 border-l border-dashed border-indigo-200/40" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span id="hero-badge">AI-Powered Website Builder</span>
            </div>

            <h1 id="hero-title" className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Build stunning sites with the power of AI
            </h1>

            <p id="hero-subtitle" className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              NeuralBuild transforms your ideas into production-ready websites in minutes. No code required — just describe your vision and watch it come to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Start building free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                See how it works
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-dashed border-slate-200">
              {[
                { value: '50K+', label: 'Sites built' },
                { value: '4.9★', label: 'Average rating' },
                { value: '99.9%', label: 'Uptime SLA' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                alt="AI-powered website builder interface"
                className="w-full object-cover"
                data-strk-img-id="hero-main-img"
                data-strk-img="[hero-subtitle] [hero-title] artificial intelligence modern UI dashboard"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">AI is generating your site…</div>
                    <div className="text-xs text-slate-500">Estimated time: 45 seconds</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating dashed accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-indigo-200 rounded-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-dashed border-violet-200 rounded-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
