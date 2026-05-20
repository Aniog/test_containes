import { Link } from 'react-router-dom'
import { ArrowRight, Zap, BookOpen, ShoppingBag } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0f0f13]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/25 via-[#0f0f13] to-cyan-900/15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" />
            Your Ultimate Gaming Hub
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight mb-6">
            Level Up Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Gaming
            </span>{' '}
            Experience
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            Discover the latest gaming news, exclusive deals from Steam, Epic, Nintendo, PlayStation & Xbox, and shop our curated game store — all in one place.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/deals"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              <Zap className="w-4 h-4" />
              Browse Deals
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/store"
              className="flex items-center gap-2 bg-[#22222f] hover:bg-[#2d2d3d] text-slate-100 font-semibold px-6 py-3 rounded-lg border border-[#2d2d3d] hover:border-violet-500/50 transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4" />
              Visit Store
            </Link>
            <Link
              to="/news"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-100 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Read News
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-[#2d2d3d]">
            {[
              { value: '5', label: 'Platforms Covered' },
              { value: '500+', label: 'Games in Store' },
              { value: 'Daily', label: 'Deal Updates' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-slate-100">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
