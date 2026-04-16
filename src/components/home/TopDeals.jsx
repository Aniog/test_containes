import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Clock } from 'lucide-react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { PlatformBadge, DiscountBadge } from '../ui/GameUI'

function DealCard({ deal }) {
  const d = deal.data
  const endsIn = d.deal_ends_at
    ? formatDistanceToNow(parseISO(d.deal_ends_at), { addSuffix: true })
    : null

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/40 transition-all hover:shadow-lg hover:shadow-green-500/10">
      <div className="relative h-40 overflow-hidden">
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
      <div className="p-4">
        <h3 className="text-white font-bold text-base leading-snug mb-2 line-clamp-1">{d.game_title}</h3>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {d.is_free ? (
              <span className="text-green-400 font-bold text-lg">FREE</span>
            ) : (
              <>
                <span className="text-green-400 font-bold text-lg">${d.sale_price?.toFixed(2)}</span>
                <span className="text-gray-500 text-sm line-through">${d.original_price?.toFixed(2)}</span>
              </>
            )}
          </div>
          {d.genre && <span className="text-gray-500 text-xs">{d.genre}</span>}
        </div>
        {endsIn && (
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
            <Clock className="w-3 h-3" />
            Ends {endsIn}
          </div>
        )}
        <a
          href={d.store_url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Get Deal <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}

export default function TopDeals({ deals, loading }) {
  return (
    <section className="bg-gray-900/50 border-y border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">🔥 Hot Deals Right Now</h2>
            <p className="text-gray-400 mt-1">Best discounts across all platforms</p>
          </div>
          <Link
            to="/deals"
            className="flex items-center gap-1.5 text-green-400 hover:text-green-300 font-medium text-sm transition-colors"
          >
            All deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-40 bg-gray-700" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-3/4" />
                  <div className="h-3 bg-gray-700 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deals.slice(0, 4).map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
