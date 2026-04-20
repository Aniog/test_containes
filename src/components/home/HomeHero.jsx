import { Link } from 'react-router-dom'
import { Zap, Tag, ShoppingBag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Spring Sale 2026 — Up to 90% Off
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Your Ultimate{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Gaming Hub
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Discover the latest gaming news, exclusive deals from Steam, Epic, PlayStation, Xbox & Nintendo, and shop our curated game store — all in one place.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/store">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="w-5 h-5" />
                Browse Store
              </Button>
            </Link>
            <Link to="/discounts">
              <Button size="lg" variant="outline" className="gap-2">
                <Tag className="w-5 h-5" />
                View Deals
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { label: 'Games Available', value: '500+' },
              { label: 'Active Deals', value: '1,200+' },
              { label: 'Platforms Covered', value: '5' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
