import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Newspaper, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-16 pb-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-64 bg-indigo-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Live Deals & Latest Gaming News</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Your Gaming
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Universe Hub
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Stay ahead with the latest news, reviews, and exclusive deals from Steam, Epic Games, Nintendo, PlayStation, and Xbox — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/deals"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-500/25 text-base"
            >
              <Zap className="w-5 h-5" />
              Browse Hot Deals
            </Link>
            <Link
              to="/news"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
            >
              <Newspaper className="w-5 h-5" />
              Read Latest News
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { label: 'Active Deals', value: '500+' },
            { label: 'Platforms', value: '5' },
            { label: 'Articles', value: '1,200+' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
