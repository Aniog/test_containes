import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { ExternalLink, Clock, Tag, Zap } from 'lucide-react'
import { fetchDeals } from '../api/gameApi'
import { PlatformBadge, DiscountBadge, LoadingGrid, EmptyState } from '../components/ui/GameUI'

const PLATFORMS = [
  { id: 'all', label: 'All Platforms', emoji: '🌐' },
  { id: 'steam', label: 'Steam', emoji: '🎮' },
  { id: 'epic', label: 'Epic Games', emoji: '⚡' },
  { id: 'nintendo', label: 'Nintendo', emoji: '🕹️' },
  { id: 'playstation', label: 'PlayStation', emoji: '🎯' },
  { id: 'xbox', label: 'Xbox', emoji: '🟢' },
]

function DealCard({ deal }) {
  const d = deal.data
  const endsIn = d.deal_ends_at
    ? formatDistanceToNow(parseISO(d.deal_ends_at), { addSuffix: true })
    : null
  const savings = d.original_price - d.sale_price

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/40 transition-all hover:shadow-xl hover:shadow-green-500/10">
      <div className="relative h-48 overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80'}
          alt={d.game_title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <PlatformBadge platform={d.platform} />
          {d.is_free ? (
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-500 text-white">FREE</span>
          ) : (
            <DiscountBadge percent={d.discount_percent} />
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-lg leading-snug mb-1 line-clamp-1">{d.game_title}</h3>
        {d.genre && <p className="text-gray-500 text-xs mb-3">{d.genre}</p>}

        <div className="flex items-end justify-between mb-4">
          <div>
            {d.is_free ? (
              <span className="text-green-400 font-extrabold text-2xl">FREE</span>
            ) : (
              <>
                <div className="text-green-400 font-extrabold text-2xl">${d.sale_price?.toFixed(2)}</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-gray-500 text-sm line-through">${d.original_price?.toFixed(2)}</span>
                  <span className="text-green-400 text-xs font-semibold">Save ${savings?.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {endsIn && (
          <div className="flex items-center gap-1.5 text-xs text-orange-400 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-lg px-3 py-2">
            <Clock className="w-3.5 h-3.5" />
            Deal ends {endsIn}
          </div>
        )}

        <a
          href={d.store_url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-semibold rounded-lg transition-all"
        >
          Get Deal <ExternalLink className="w-4 h-4" />
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
    fetchDeals({ platform: platform !== 'all' ? platform : undefined, limit: 50 })
      .then(setDeals)
      .finally(() => setLoading(false))
  }, [platform])

  const setPlatform = (p) => {
    const params = new URLSearchParams(searchParams)
    if (p === 'all') params.delete('platform')
    else params.set('platform', p)
    setSearchParams(params)
  }

  const freeDeals = deals.filter((d) => d.data.is_free)
  const paidDeals = deals.filter((d) => !d.data.is_free)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <h1 className="text-4xl font-extrabold text-white">Game Deals</h1>
        </div>
        <p className="text-gray-400">Best discounts across Steam, Epic, PlayStation, Xbox, and Nintendo</p>
      </div>

      {/* Platform Tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {PLATFORMS.map(({ id, label, emoji }) => (
          <button
            key={id}
            onClick={() => setPlatform(id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
              platform === id
                ? 'bg-green-600 text-white border-green-500 shadow-lg shadow-green-500/20'
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border-gray-700'
            }`}
          >
            <span>{emoji}</span>
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingGrid count={8} />
      ) : deals.length === 0 ? (
        <EmptyState icon={Tag} title="No deals found" description="Check back soon for new deals on this platform." />
      ) : (
        <>
          {/* Free Games */}
          {freeDeals.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-green-400">🎁</span> Free Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {freeDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          )}

          {/* Paid Deals */}
          {paidDeals.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🔥</span> Best Discounts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {paidDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
