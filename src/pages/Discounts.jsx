import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ExternalLink, TrendingDown, Clock, Search } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fetchDiscounts } from '@/api/discounts'
import { PlatformBadge, PLATFORMS } from '@/components/ui/PlatformBadge'
import { Input } from '@/components/ui/input'

const PLATFORM_HEADERS = {
  steam: { bg: 'bg-gradient-to-r from-[#1b2838] to-[#2a475e]', text: 'text-[#66c0f4]', border: 'border-[#4c6b22]' },
  epic: { bg: 'bg-gradient-to-r from-gray-800 to-gray-900', text: 'text-white', border: 'border-gray-600' },
  nintendo: { bg: 'bg-gradient-to-r from-red-900 to-red-800', text: 'text-red-200', border: 'border-red-700' },
  playstation: { bg: 'bg-gradient-to-r from-blue-900 to-blue-800', text: 'text-blue-200', border: 'border-blue-700' },
  xbox: { bg: 'bg-gradient-to-r from-green-900 to-green-800', text: 'text-green-200', border: 'border-green-700' },
}

function DiscountCard({ deal }) {
  const d = deal.data || {}
  const savings = d.original_price && d.discounted_price ? (d.original_price - d.discounted_price).toFixed(2) : null
  const saleEnd = d.sale_end ? new Date(d.sale_end) : null
  const isExpiringSoon = saleEnd && (saleEnd - Date.now()) < 3 * 24 * 60 * 60 * 1000

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all group flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400'}
          alt={d.game_title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-2.5 py-1 rounded-lg shadow-lg">
          -{d.discount_percent}%
        </div>
        {d.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
            HOT
          </div>
        )}
        {isExpiringSoon && (
          <div className="absolute bottom-2 left-2 bg-orange-600/90 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" /> Ending soon
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 flex-1">{d.game_title}</h3>
          <PlatformBadge platform={d.platform} className="flex-shrink-0" />
        </div>

        {d.genre && <span className="text-gray-500 text-xs mb-2">{d.genre}</span>}

        <div className="flex items-center gap-3 mt-auto">
          <div>
            <span className="text-green-400 font-bold text-lg">${d.discounted_price?.toFixed(2)}</span>
            <span className="text-gray-500 text-sm line-through ml-2">${d.original_price?.toFixed(2)}</span>
          </div>
          {savings && <span className="text-green-500 text-xs font-medium">Save ${savings}</span>}
        </div>

        {saleEnd && (
          <p className="text-gray-500 text-xs mt-1">
            Ends {formatDistanceToNow(saleEnd, { addSuffix: true })}
          </p>
        )}

        {d.store_url && (
          <a
            href={d.store_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Get Deal <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function Discounts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const platform = searchParams.get('platform') || 'all'

  useEffect(() => {
    setLoading(true)
    fetchDiscounts({ platform: platform !== 'all' ? platform : undefined, limit: 50 })
      .then(({ rows }) => setDeals(rows))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [platform])

  const filtered = search
    ? deals.filter(d => (d.data?.game_title || '').toLowerCase().includes(search.toLowerCase()))
    : deals

  const setFilter = (val) => {
    const params = new URLSearchParams(searchParams)
    if (val === 'all') params.delete('platform')
    else params.set('platform', val)
    setSearchParams(params)
  }

  // Group by platform when showing all
  const grouped = platform === 'all'
    ? PLATFORMS.slice(1).reduce((acc, p) => {
        const platformDeals = filtered.filter(d => d.data?.platform === p.id)
        if (platformDeals.length > 0) acc[p.id] = { label: p.label, deals: platformDeals }
        return acc
      }, {})
    : null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 mb-2">
          <TrendingDown className="w-8 h-8 text-green-400" />
          Game Deals & Discounts
        </h1>
        <p className="text-gray-400">Best prices across Steam, Epic Games, Nintendo, PlayStation & Xbox</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search deals..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map(p => (
            <button
              key={p.id}
              onClick={() => setFilter(p.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                platform === p.id ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => <div key={i} className="bg-gray-800 rounded-xl h-72 animate-pulse" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <TrendingDown className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg">No deals found</p>
          <p className="text-sm mt-1">Check back soon for new discounts</p>
        </div>
      ) : grouped ? (
        // Grouped by platform view
        <div className="space-y-10">
          {Object.entries(grouped).map(([pid, { label, deals: platformDeals }]) => {
            const style = PLATFORM_HEADERS[pid] || {}
            return (
              <div key={pid}>
                <div className={`${style.bg} rounded-xl p-5 mb-4 border ${style.border || 'border-gray-700'}`}>
                  <h2 className={`text-xl font-bold ${style.text}`}>{label} Deals</h2>
                  <p className="text-gray-400 text-sm mt-0.5">{platformDeals.length} active deals</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {platformDeals.map(deal => <DiscountCard key={deal.id} deal={deal} />)}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        // Single platform view
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(deal => <DiscountCard key={deal.id} deal={deal} />)}
        </div>
      )}
    </div>
  )
}
