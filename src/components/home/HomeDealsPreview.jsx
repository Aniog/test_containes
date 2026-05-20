import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import { PLATFORM_CONFIG } from '../../lib/utils.js'

function DealCard({ deal }) {
  const fields = deal.data
  const platform = PLATFORM_CONFIG[fields.platform] || PLATFORM_CONFIG.steam
  const isFree = fields.sale_price === 0

  return (
    <div className={`bg-[#1a1a24] border ${platform.border} rounded-xl p-4 hover:border-opacity-70 transition-all duration-200 hover:shadow-lg`}>
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${platform.badge}`}>
          {platform.label}
        </span>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {isFree ? 'FREE' : `-${fields.discount_percent}%`}
        </span>
      </div>

      <h4 className="text-slate-100 font-bold text-sm mb-1 line-clamp-1">{fields.game_title}</h4>
      {fields.genre && <p className="text-slate-600 text-xs mb-3">{fields.genre}</p>}

      <div className="flex items-center gap-2">
        {isFree ? (
          <span className="text-green-400 font-extrabold text-lg">FREE</span>
        ) : (
          <>
            <span className="text-slate-100 font-extrabold text-lg">${fields.sale_price.toFixed(2)}</span>
            <span className="text-slate-600 text-sm line-through">${fields.original_price.toFixed(2)}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default function HomeDealsPreview({ deals = [] }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-5 h-5 text-red-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Hot Deals
            </h2>
          </div>
          <p className="text-slate-500 text-sm">Best discounts across all platforms right now</p>
        </div>
        <Link
          to="/deals"
          className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-semibold transition-colors"
        >
          All deals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {deals.length === 0 ? (
        <div className="text-center py-12 text-slate-600">No deals available.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deals.slice(0, 8).map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}
    </section>
  )
}
