import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ExternalLink, Tag, Clock, TrendingDown } from 'lucide-react'
import { fetchDiscounts } from '@/api/gamesite'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatDistanceToNow } from 'date-fns'

const PLATFORMS = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']

const PLATFORM_STYLES = {
  Steam: { badge: 'steam', bg: 'bg-[#1b2838]/60 border-[#66c0f4]/20', accent: 'text-[#66c0f4]' },
  Epic: { badge: 'epic', bg: 'bg-gray-800/60 border-gray-600/30', accent: 'text-gray-200' },
  Nintendo: { badge: 'nintendo', bg: 'bg-red-950/60 border-red-700/20', accent: 'text-red-400' },
  PlayStation: { badge: 'playstation', bg: 'bg-blue-950/60 border-blue-700/20', accent: 'text-blue-400' },
  Xbox: { badge: 'xbox', bg: 'bg-green-950/60 border-green-700/20', accent: 'text-green-400' },
}

function DiscountCard({ deal }) {
  const d = deal.data
  const style = PLATFORM_STYLES[d.platform] || { badge: 'secondary', bg: 'bg-gray-800/60 border-gray-700', accent: 'text-gray-300' }
  const expiresIn = d.valid_until ? formatDistanceToNow(new Date(d.valid_until), { addSuffix: true }) : null
  const savings = d.original_price && d.discounted_price ? (d.original_price - d.discounted_price).toFixed(2) : null

  return (
    <div className={`border rounded-xl overflow-hidden ${style.bg} hover:border-indigo-500/40 transition-colors`}>
      <div className="relative">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80'}
          alt={d.game_title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-red-500 text-white text-sm font-extrabold px-3 py-1 rounded-lg">
            -{d.discount_percent}%
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant={style.badge}>{d.platform}</Badge>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{d.game_title}</h3>
        {d.genre && <p className="text-gray-400 text-xs mb-3">{d.genre}</p>}

        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xl font-extrabold ${style.accent}`}>
            ${d.discounted_price?.toFixed(2)}
          </span>
          <span className="text-gray-500 text-sm line-through">${d.original_price?.toFixed(2)}</span>
          {savings && (
            <span className="text-green-400 text-xs font-medium">Save ${savings}</span>
          )}
        </div>

        {expiresIn && (
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
            <Clock className="w-3 h-3" />
            Expires {expiresIn}
          </div>
        )}

        <a href={d.store_url || '#'} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline" className="w-full gap-1.5">
            <ExternalLink className="w-3.5 h-3.5" />
            Get Deal on {d.platform}
          </Button>
        </a>
      </div>
    </div>
  )
}

export default function Discounts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [discounts, setDiscounts] = useState([])
  const [loading, setLoading] = useState(true)

  const platform = searchParams.get('platform') || 'All'

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await fetchDiscounts({
          platform: platform !== 'All' ? platform : undefined,
          limit: 50,
        })
        setDiscounts(res.list)
      } catch (err) {
        console.error('Failed to load discounts:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [platform])

  const setFilter = (p) => {
    const params = new URLSearchParams(searchParams)
    if (p === 'All') params.delete('platform')
    else params.set('platform', p)
    setSearchParams(params)
  }

  const totalSavings = discounts.reduce((sum, d) => {
    const s = (d.data?.original_price || 0) - (d.data?.discounted_price || 0)
    return sum + s
  }, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <TrendingDown className="w-7 h-7 text-green-400" />
          <h1 className="text-3xl font-bold text-white">Game Deals & Discounts</h1>
        </div>
        <p className="text-gray-400">
          Best deals from Steam, Epic Games, Nintendo, PlayStation & Xbox stores.
          {discounts.length > 0 && (
            <span className="text-green-400 font-medium ml-2">
              {discounts.length} active deals — save up to ${totalSavings.toFixed(0)} total!
            </span>
          )}
        </p>
      </div>

      {/* Platform Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {PLATFORMS.map(p => (
          <button
            key={p}
            onClick={() => setFilter(p)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              platform === p ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-72 animate-pulse" />
          ))}
        </div>
      ) : discounts.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <Tag className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg">No active deals for {platform}.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {discounts.map(deal => <DiscountCard key={deal.id} deal={deal} />)}
        </div>
      )}
    </div>
  )
}
