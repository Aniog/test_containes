import { Link } from 'react-router-dom'
import { Zap, ArrowRight, ExternalLink } from 'lucide-react'
import { Card, Skeleton } from '@/components/ui/index'
import { PLATFORM_COLORS } from '@/lib/constants'

const PLATFORM_TABS = ['All', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']

function DealCard({ deal }) {
  const d = deal.data
  const colors = PLATFORM_COLORS[d.platform] || PLATFORM_COLORS.General
  const savings = (d.original_price - d.deal_price).toFixed(2)

  return (
    <Card className="group hover:border-yellow-500/40 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600'}
          alt={d.game_title}
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <span className={`px-2 py-0.5 rounded text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border}`}>
            {d.platform}
          </span>
          <span className="bg-red-500 text-white text-sm font-extrabold px-2 py-0.5 rounded">
            -{d.discount_percent}%
          </span>
        </div>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h4 className="text-white text-sm font-semibold line-clamp-1 mb-1">{d.game_title}</h4>
        <p className="text-gray-500 text-xs mb-2">{d.genre}</p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold text-sm">
                {d.deal_price === 0 ? 'FREE' : `$${d.deal_price?.toFixed(2)}`}
              </span>
              <span className="text-gray-600 text-xs line-through">${d.original_price?.toFixed(2)}</span>
            </div>
            <span className="text-gray-500 text-xs">Save ${savings}</span>
          </div>
          <a
            href={d.deal_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Card>
  )
}

export default function PlatformDeals({ deals, loading }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Hot Deals</h2>
            </div>
            <p className="text-gray-500">Best discounts across all platforms right now</p>
          </div>
          <Link to="/deals" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition-colors">
            All deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="h-36 w-full rounded-none" />
                <div className="p-3 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-6 w-full mt-2" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
