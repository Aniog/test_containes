import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Newspaper, ShoppingBag } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/40 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.1)_0%,_transparent_60%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Your Ultimate Gaming Hub
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Level Up Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Gaming
            </span>{' '}
            Experience
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Stay ahead with the latest gaming news, discover massive discounts across Steam, Epic, PlayStation, Xbox, and Nintendo — and shop our curated game store.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/deals"
              className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-500/25"
            >
              <Zap className="w-5 h-5" />
              Browse Hot Deals
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/store"
              className="flex items-center gap-2 px-6 py-3.5 bg-gray-800 border border-gray-700 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              Visit Store
            </Link>
            <Link
              to="/news"
              className="flex items-center gap-2 px-6 py-3.5 bg-transparent border border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all"
            >
              <Newspaper className="w-5 h-5" />
              Latest News
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14">
            {[
              { value: '5', label: 'Platforms Covered' },
              { value: '1000+', label: 'Games in Store' },
              { value: 'Daily', label: 'Deal Updates' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-white">{value}</div>
                <div className="text-gray-500 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
