import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Zap, ExternalLink, Filter } from 'lucide-react'
import { fetchGameDeals } from '../api/gameApi.js'
import { PLATFORM_CONFIG } from '../lib/utils.js'

const PLATFORMS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox']

function DealCard({ deal }) {
  const fields = deal.data
  const platform = PLATFORM_CONFIG[fields.platform] || PLATFORM_CONFIG.steam
  const isFree = fields.sale_price === 0
  const savings = fields.original_price - fields.sale_price

  return (
    <div className={`bg-[#1a1a24] border ${platform.border} rounded-xl p-5 hover:shadow-lg transition-all duration-200 hover:scale-[1.01]`}>
      {/* Platform + discount badge */}
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${platform.badge}`}>
          {platform.label}
        </span>
        <span className={`text-sm font-extrabold px-3 py-1 rounded-full ${isFree ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
          {isFree ? 'FREE' : `-${fields.discount_percent}%`}
        </span>
      </div>

      {/* Game info */}
      <h3 className="text-slate-100 font-bold text-base mb-1 line-clamp-1">{fields.game_title}</h3>
      {fields.genre && <p className="text-slate-600 text-xs mb-4">{fields.genre}</p>}

      {/* Price */}
      <div className="flex items-end justify-between">
        <div>
          {isFree ? (
            <div className="text-green-400 font-extrabold text-2xl">FREE</div>
          ) : (
            <>
              <div className="text-slate-100 font-extrabold text-2xl">${fields.sale_price.toFixed(2)}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-slate-600 text-sm line-through">${fields.original_price.toFixed(2)}</span>
                <span className="text-green-400 text-xs font-semibold">Save ${savings.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
        <a
          href="#"
          className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
        >
          Get Deal <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}

export default function Deals() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)

  const platform = searchParams.get('platform') || 'all'

  useEffect(() => {
    setLoading(true)
    fetchGameDeals({ platform, limit: 50 })
      .then(setDeals)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [platform])

  const setFilter = (value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete('platform')
    else params.set('platform', value)
    setSearchParams(params)
  }

  const freeDeals = deals.filter((d) => d.data.sale_price === 0)
  const paidDeals = deals.filter((d) => d.data.sale_price > 0)

  return (
    <div className="min-h-screen bg-[#0f0f13] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-7 h-7 text-red-400" />
            <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight">Hot Deals</h1>
          </div>
          <p className="text-slate-500">Best discounts across Steam, Epic, Nintendo, PlayStation & Xbox</p>
        </div>

        {/* Platform filter */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <Filter className="w-4 h-4 text-slate-500 shrink-0" />
          {PLATFORMS.map((p) => {
            const cfg = PLATFORM_CONFIG[p] || PLATFORM_CONFIG.all
            return (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  platform === p
                    ? 'bg-violet-600 text-white'
                    : `bg-[#1a1a24] border border-[#2d2d3d] ${cfg.color} hover:border-violet-500/40`
                }`}
              >
                {p === 'all' ? 'All Platforms' : cfg.label}
              </button>
            )
          })}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : deals.length === 0 ? (
          <div className="text-center py-24 text-slate-600">
            <div className="text-5xl mb-4">🎮</div>
            <p className="text-lg font-semibold text-slate-500">No deals found</p>
          </div>
        ) : (
          <>
            {/* Free games section */}
            {freeDeals.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-5">
                  <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold px-3 py-1 rounded-full">
                    FREE GAMES
                  </span>
                  <span className="text-slate-600 text-sm">{freeDeals.length} available</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {freeDeals.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))}
                </div>
              </div>
            )}

            {/* Discounted games */}
            {paidDeals.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold px-3 py-1 rounded-full">
                    ON SALE
                  </span>
                  <span className="text-slate-600 text-sm">{paidDeals.length} deals</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {paidDeals.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
