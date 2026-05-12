import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 md:py-32">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
          <Zap className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">Latest deals & news updated daily</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Your Gaming{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Universe
          </span>
          <br />Starts Here
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Discover the best deals across Steam, Epic, Nintendo, PlayStation & Xbox.
          Read the latest gaming news, reviews, and buy games directly from our store.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/deals"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Browse Deals <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/store"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base border border-gray-700"
          >
            Visit Store
          </Link>
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            { label: 'Steam', color: 'bg-blue-500/10 border-blue-500/30 text-blue-300' },
            { label: 'Epic', color: 'bg-gray-500/10 border-gray-500/30 text-gray-300' },
            { label: 'Nintendo', color: 'bg-red-500/10 border-red-500/30 text-red-300' },
            { label: 'PlayStation', color: 'bg-blue-600/10 border-blue-600/30 text-blue-400' },
            { label: 'Xbox', color: 'bg-green-500/10 border-green-500/30 text-green-300' },
          ].map(({ label, color }) => (
            <span key={label} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${color}`}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
