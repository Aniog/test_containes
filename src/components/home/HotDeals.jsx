import { Link } from 'react-router-dom'
import { ArrowRight, Tag, Star, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { deals } from '../../data/deals'
import PlatformBadge from '../ui/PlatformBadge'

function DealCard({ deal }) {
  const timeLeft = deal.deal_ends_at
    ? formatDistanceToNow(new Date(deal.deal_ends_at), { addSuffix: false })
    : null

  return (
    <Link
      to={`/deals?platform=${deal.platform}`}
      className="group bg-gray-900 border border-white/10 hover:border-indigo-500/50 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={deal.cover_image_url}
          alt={deal.game_title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
        {/* Discount badge */}
        <div className="absolute top-3 right-3">
          {deal.is_free ? (
            <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">FREE</span>
          ) : (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
              -{deal.discount_percent}%
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <PlatformBadge platform={deal.platform} />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-1 group-hover:text-indigo-300 transition-colors">
          {deal.game_title}
        </h3>
        <p className="text-gray-500 text-xs mb-3">{deal.genre}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {deal.is_free ? (
              <span className="text-green-400 font-bold text-base">Free</span>
            ) : (
              <>
                <span className="text-white font-bold text-base">${deal.sale_price.toFixed(2)}</span>
                <span className="text-gray-500 text-xs line-through">${deal.original_price.toFixed(2)}</span>
              </>
            )}
          </div>
          {deal.rating && (
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-medium text-gray-300">{deal.rating}</span>
            </div>
          )}
        </div>

        {timeLeft && (
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>Ends in {timeLeft}</span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default function HotDeals() {
  const hotDeals = deals
    .sort((a, b) => b.discount_percent - a.discount_percent)
    .slice(0, 8)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            🔥 Hot Deals
          </h2>
          <p className="text-gray-400 mt-1">Best discounts across all platforms right now</p>
        </div>
        <Link
          to="/deals"
          className="hidden sm:flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotDeals.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Link
          to="/deals"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
        >
          View All Deals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
