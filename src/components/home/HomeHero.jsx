import { Link } from 'react-router-dom'
import { ArrowRight, Zap, ShoppingBag, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/index'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-16 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-gray-950 to-purple-950/30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-indigo-300 text-sm font-medium">Steam Spring Sale is LIVE — Up to 90% off!</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Your Gaming
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Universe
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            News, reviews, and deals from Steam, Epic, Nintendo, PlayStation & Xbox — plus our own store with the best prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <ShoppingBag className="w-5 h-5" />
                Browse Store
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/deals">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                View Hot Deals
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto gap-2">
                <BookOpen className="w-4 h-4" />
                Latest News
              </Button>
            </Link>
          </div>
        </div>

        {/* Platform pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {[
            { name: 'Steam', color: 'bg-[#1b2838] border-[#4c6b22] text-[#c7d5e0]' },
            { name: 'Epic Games', color: 'bg-gray-800 border-gray-600 text-white' },
            { name: 'Nintendo', color: 'bg-red-900/60 border-red-700 text-red-200' },
            { name: 'PlayStation', color: 'bg-blue-900/60 border-blue-700 text-blue-200' },
            { name: 'Xbox', color: 'bg-green-900/60 border-green-700 text-green-200' },
          ].map(({ name, color }) => (
            <span key={name} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${color}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
