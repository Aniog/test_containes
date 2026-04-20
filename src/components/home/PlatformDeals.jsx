import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

const PLATFORMS = [
  { name: 'Steam', color: 'from-[#1b2838] to-[#2a475e]', badge: 'steam', accent: '#66c0f4' },
  { name: 'Epic', color: 'from-gray-900 to-gray-800', badge: 'epic', accent: '#ffffff' },
  { name: 'Nintendo', color: 'from-red-900 to-red-800', badge: 'nintendo', accent: '#ff4444' },
  { name: 'PlayStation', color: 'from-blue-900 to-blue-800', badge: 'playstation', accent: '#0070d1' },
  { name: 'Xbox', color: 'from-green-900 to-green-800', badge: 'xbox', accent: '#107c10' },
]

function PlatformDealsCard({ platform, deals }) {
  const topDeals = deals.slice(0, 3)
  const p = PLATFORMS.find(pl => pl.name === platform)

  return (
    <div className={`bg-gradient-to-br ${p?.color || 'from-gray-900 to-gray-800'} border border-gray-700 rounded-xl p-5`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge variant={p?.badge || 'secondary'}>{platform}</Badge>
          <span className="text-gray-300 text-sm font-medium">{deals.length} deals</span>
        </div>
        <Link
          to={`/discounts?platform=${platform}`}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
        >
          See all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {topDeals.length === 0 ? (
          <p className="text-gray-500 text-sm">No active deals</p>
        ) : (
          topDeals.map(deal => {
            const d = deal.data
            return (
              <div key={deal.id} className="flex items-center gap-3">
                <img
                  src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&q=80'}
                  alt={d.game_title}
                  className="w-12 h-9 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-medium truncate">{d.game_title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-green-400 text-xs font-bold">-{d.discount_percent}%</span>
                    <span className="text-white text-xs">${d.discounted_price?.toFixed(2)}</span>
                    <span className="text-gray-500 text-xs line-through">${d.original_price?.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default function PlatformDeals({ discounts, loading }) {
  const byPlatform = PLATFORMS.reduce((acc, p) => {
    acc[p.name] = discounts.filter(d => d.data?.platform === p.name)
    return acc
  }, {})

  return (
    <section className="py-12 border-t border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Platform Deals</h2>
          <p className="text-gray-400 text-sm mt-1">Best discounts across all major platforms</p>
        </div>
        <Link to="/discounts" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
          All Deals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-48 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PLATFORMS.map(p => (
            <PlatformDealsCard key={p.name} platform={p.name} deals={byPlatform[p.name] || []} />
          ))}
        </div>
      )}
    </section>
  )
}
