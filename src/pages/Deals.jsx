import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Zap, ExternalLink, Clock, Search } from 'lucide-react'
import { Card, Input, Skeleton } from '@/components/ui/index'
import { PLATFORM_COLORS, PLATFORMS } from '@/lib/constants'
import { fetchDeals } from '@/api/gameApi'
import { formatDistanceToNow, parseISO } from 'date-fns'

const PLATFORM_TABS = ['All', ...PLATFORMS]

function DealCard({ deal }) {
  const d = deal.data
  const colors = PLATFORM_COLORS[d.platform] || PLATFORM_COLORS.General
  const savings = (d.original_price - d.deal_price).toFixed(2)
  const expiresIn = d.expires_at
    ? formatDistanceToNow(parseISO(d.expires_at), { addSuffix: true })
    : null

  return (
    <Card className="group hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600'}
          alt={d.game_title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-2 left-2">
          <span className={`px-2.5 py-1 rounded text-xs font-bold border ${colors.bg} ${colors.text} ${colors.border}`}>
            {d.platform}
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span className="bg-red-500 text-white text-sm font-extrabold px-2.5 py-1 rounded-lg shadow-lg">
            {d.discount_percent === 100 ? 'FREE' : `-${d.discount_percent}%`}
          </span>
        </div>
        {expiresIn && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 text-xs text-gray-300">
            <Clock className="w-3 h-3" />
            <span>Expires {expiresIn}</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold mb-1 line-clamp-1">{d.game_title}</h3>
        {d.genre && <p className="text-gray-500 text-xs mb-3">{d.genre}</p>}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold text-lg">
                {d.deal_price === 0 ? 'FREE' : `$${d.deal_price?.toFixed(2)}`}
              </span>
              <span className="text-gray-600 text-sm line-through">${d.original_price?.toFixed(2)}</span>
            </div>
            <span className="text-green-600 text-xs">You save ${savings}</span>
          </div>
          <a
            href={d.deal_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            Get Deal <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </Card>
  )
}

export default function Deals() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const activePlatform = searchParams.get('platform') || 'All'

  const loadDeals = useCallback(async () => {
    setLoading(true)
    console.log('[Deals] Loading deals for platform:', activePlatform)
    try {
      const { list } = await fetchDeals({
        platform: activePlatform !== 'All' ? activePlatform : undefined,
        limit: 50,
      })
      setDeals(list)
      console.log('[Deals] Deals loaded:', list.length)
    } catch (err) {
      console.error('[Deals] Error:', err)
    } finally {
      setLoading(false)
    }
  }, [activePlatform])

  useEffect(() => {
    loadDeals()
  }, [loadDeals])

  const filtered = deals.filter((d) =>
    search ? d.data.game_title?.toLowerCase().includes(search.toLowerCase()) : true
  )

  const setPlatform = (p) => {
    const params = new URLSearchParams(searchParams)
    if (p === 'All') params.delete('platform')
    else params.set('platform', p)
    setSearchParams(params)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-950/40 via-gray-900 to-orange-950/30 border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Game Deals</h1>
          </div>
          <p className="text-gray-400">Best discounts from Steam, Epic, Nintendo, PlayStation & Xbox</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Platform tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {PLATFORM_TABS.map((p) => {
            const colors = PLATFORM_COLORS[p]
            const isActive = activePlatform === p
            return (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  isActive
                    ? p === 'All'
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : `${colors?.bg} ${colors?.text} ${colors?.border}`
                    : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {p}
              </button>
            )
          })}
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            placeholder="Search deals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {!loading && (
          <p className="text-gray-500 text-sm mb-6">
            {filtered.length} deal{filtered.length !== 1 ? 's' : ''} available
          </p>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="h-44 w-full rounded-none" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-8 w-full mt-3" />
                </div>
              </Card>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <Zap className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No deals found.</p>
            <p className="text-gray-600 text-sm mt-2">Check back soon for new deals!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
