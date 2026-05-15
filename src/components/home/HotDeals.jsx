import { Link } from 'react-router-dom'
import { ArrowRight, Star, Clock, Tag } from 'lucide-react'
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
      className="group bg-white border border-slate-200 hover:border-green-400 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-green-100"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={deal.cover_image_url}
          alt={deal.game_title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        {/* Discount badge */}
        <div className="absolute top-3 right-3">
          {deal.is_free ? (
            <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">FREE</span>
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
        <h3 className="text-slate-900 font-semibold text-sm leading-snug mb-1 line-clamp-1 group-hover:text-green-600 transition-colors">
          {deal.game_title}
        </h3>
        <p className="text-slate-400 text-xs mb-3">{deal.genre}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {deal.is_free ? (
              <span className="text-green-700 font-bold text-base">Free</span>
            ) : (
              <>
                <span className="text-slate-900 font-bold text-base">${deal.sale_price.toFixed(2)}</span>
                <span className="text-slate-400 text-xs line-through">${deal.original_price.toFixed(2)}</span>
              </>
            )}
          </div>
          {deal.rating && (
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-medium text-slate-600">{deal.rating}</span>
            </div>
          )}
        </div>

        {timeLeft && (
          <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            🔥 Hot Deals
          </h2>
          <p className="text-slate-500 mt-1">Best discounts across all platforms right now</p>
        </div>
        <Link
          to="/deals"
          className="hidden sm:flex items-center gap-1.5 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
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
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium"
        >
          View All Deals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
