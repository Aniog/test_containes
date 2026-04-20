import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, TrendingDown } from 'lucide-react'
import { fetchDiscounts } from '@/api/discounts'
import { PlatformBadge } from '@/components/ui/PlatformBadge'

const PLATFORM_SECTIONS = [
  { id: 'steam', label: 'Steam', color: 'from-[#1b2838] to-[#2a475e]', accent: 'text-[#66c0f4]' },
  { id: 'epic', label: 'Epic Games', color: 'from-gray-800 to-gray-900', accent: 'text-white' },
  { id: 'nintendo', label: 'Nintendo', color: 'from-red-900 to-red-800', accent: 'text-red-300' },
  { id: 'playstation', label: 'PlayStation', color: 'from-blue-900 to-blue-800', accent: 'text-blue-300' },
  { id: 'xbox', label: 'Xbox', color: 'from-green-900 to-green-800', accent: 'text-green-300' },
]

function DiscountCard({ discount }) {
  const d = discount.data || {}
  return (
    <div className="bg-gray-800/60 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-all group">
      <div className="relative h-28 overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300'}
          alt={d.game_title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
          -{d.discount_percent}%
        </div>
      </div>
      <div className="p-3">
        <p className="text-white text-xs font-semibold line-clamp-1">{d.game_title}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-400 font-bold text-sm">${d.discounted_price?.toFixed(2)}</span>
          <span className="text-gray-500 text-xs line-through">${d.original_price?.toFixed(2)}</span>
        </div>
        {d.store_url && (
          <a href={d.store_url} target="_blank" rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
            View deal <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function HomePlatformDeals() {
  const [dealsByPlatform, setDealsByPlatform] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(
      PLATFORM_SECTIONS.map(p => fetchDiscounts({ platform: p.id, limit: 3 }).then(({ rows }) => [p.id, rows]))
    ).then(entries => {
      setDealsByPlatform(Object.fromEntries(entries))
    }).catch(console.error).finally(() => setLoading(false))
  }, [])

  return (
    <section className="bg-gray-900/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              <TrendingDown className="w-7 h-7 text-green-400" />
              Hot Deals by Platform
            </h2>
            <p className="text-gray-400 mt-1">Best discounts across all major stores</p>
          </div>
          <Link to="/discounts" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
            All deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => <div key={i} className="bg-gray-800 rounded-xl h-48 animate-pulse" />)}
          </div>
        ) : (
          <div className="space-y-8">
            {PLATFORM_SECTIONS.map(platform => {
              const deals = dealsByPlatform[platform.id] || []
              if (deals.length === 0) return null
              return (
                <div key={platform.id}>
                  <div className={`bg-gradient-to-r ${platform.color} rounded-xl p-5`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`font-bold text-lg ${platform.accent}`}>{platform.label} Deals</h3>
                      <Link to={`/discounts?platform=${platform.id}`}
                        className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                        More <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {deals.map(d => <DiscountCard key={d.id} discount={d} />)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
