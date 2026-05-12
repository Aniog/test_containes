import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, ExternalLink, Flame } from 'lucide-react'
import { fetchDeals } from '../api/deals.js'

const PLATFORMS = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']

const PLATFORM_STYLES = {
  Steam: {
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    tab: 'bg-blue-600',
    icon: '🎮',
  },
  Epic: {
    badge: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    tab: 'bg-gray-600',
    icon: '🎯',
  },
  Nintendo: {
    badge: 'bg-red-500/20 text-red-300 border-red-500/30',
    tab: 'bg-red-600',
    icon: '🕹️',
  },
  PlayStation: {
    badge: 'bg-blue-700/20 text-blue-400 border-blue-700/30',
    tab: 'bg-blue-800',
    icon: '🎮',
  },
  Xbox: {
    badge: 'bg-green-500/20 text-green-300 border-green-500/30',
    tab: 'bg-green-700',
    icon: '🟢',
  },
}

const PLACEHOLDER_COVERS = [
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80',
  'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&q=80',
  'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
  'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
  'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
]

function DealCard({ deal, index }) {
  const fields = deal.data || deal
  const style = PLATFORM_STYLES[fields.platform] || PLATFORM_STYLES.Steam
  const imgSrc = fields.cover_image_url || PLACEHOLDER_COVERS[index % PLACEHOLDER_COVERS.length]

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col">
      <div className="relative overflow-hidden h-44">
        <img src={imgSrc} alt={fields.game_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-2 left-2 right-2 flex justify-between">
          <span className={`px-2 py-1 rounded-md text-xs font-semibold border ${style.badge}`}>
            {fields.platform}
          </span>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
            <Flame className="w-3 h-3" />-{fields.discount_percent}%
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{fields.game_title}</h3>
        {fields.genre && <p className="text-gray-500 text-xs mb-3">{fields.genre}</p>}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-500 text-sm line-through">${Number(fields.original_price).toFixed(2)}</span>
            <span className="text-green-400 font-bold text-lg">${Number(fields.sale_price).toFixed(2)}</span>
          </div>
          {fields.store_url ? (
            <a
              href={fields.store_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium py-2 rounded-lg transition-colors"
            >
              Get Deal <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="flex items-center justify-center gap-1.5 w-full bg-gray-700 text-gray-400 text-sm font-medium py-2 rounded-lg cursor-not-allowed">
              View Deal
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Deals() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const activePlatform = searchParams.get('platform') || 'All'

  useEffect(() => {
    setLoading(true)
    const platform = activePlatform === 'All' ? undefined : activePlatform
    fetchDeals({ platform })
      .then(setDeals)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [activePlatform])

  const filtered = search
    ? deals.filter((d) => {
        const f = d.data || d
        return f.game_title?.toLowerCase().includes(search.toLowerCase()) ||
          f.genre?.toLowerCase().includes(search.toLowerCase())
      })
    : deals

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Platform Deals</h1>
          <p className="text-gray-400">Best discounts across Steam, Epic, Nintendo, PlayStation & Xbox</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Platform Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PLATFORMS.map((platform) => {
            const style = PLATFORM_STYLES[platform]
            const isActive = activePlatform === platform
            return (
              <button
                key={platform}
                onClick={() => setSearchParams(platform === 'All' ? {} : { platform })}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? (style ? style.tab : 'bg-purple-600') + ' text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {style?.icon && <span className="mr-1.5">{style.icon}</span>}
                {platform}
              </button>
            )
          })}
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Results count */}
        {!loading && (
          <p className="text-gray-500 text-sm mb-5">
            {filtered.length} deal{filtered.length !== 1 ? 's' : ''} found
            {activePlatform !== 'All' ? ` on ${activePlatform}` : ''}
          </p>
        )}

        {/* Deals Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-44 bg-gray-800" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-800 rounded w-1/2" />
                  <div className="h-8 bg-gray-800 rounded mt-3" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No deals found.</p>
            <p className="text-gray-600 text-sm mt-2">Try a different platform or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((deal, i) => (
              <DealCard key={deal.id} deal={deal} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
