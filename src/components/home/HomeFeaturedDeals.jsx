import { Link } from 'react-router-dom'
import { ArrowRight, Tag } from 'lucide-react'

const PLATFORM_STYLES = {
  Steam: { bg: 'bg-blue-600', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  Epic: { bg: 'bg-gray-700', badge: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
  Nintendo: { bg: 'bg-red-600', badge: 'bg-red-500/20 text-red-300 border-red-500/30' },
  PlayStation: { bg: 'bg-blue-800', badge: 'bg-blue-600/20 text-blue-400 border-blue-600/30' },
  Xbox: { bg: 'bg-green-700', badge: 'bg-green-500/20 text-green-300 border-green-500/30' },
}

const PLACEHOLDER_COVERS = [
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80',
  'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&q=80',
  'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
  'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
  'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80',
]

function DealCard({ deal, index }) {
  const fields = deal.data || deal
  const style = PLATFORM_STYLES[fields.platform] || PLATFORM_STYLES.Steam
  const imgSrc = fields.cover_image_url || PLACEHOLDER_COVERS[index % PLACEHOLDER_COVERS.length]

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col">
      <div className="relative overflow-hidden h-40">
        <img src={imgSrc} alt={fields.game_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className={`absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg`}>
          -{fields.discount_percent}%
        </span>
        <span className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-semibold border ${style.badge}`}>
          {fields.platform}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{fields.game_title}</h3>
        {fields.genre && <p className="text-gray-500 text-xs mb-3">{fields.genre}</p>}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-xs line-through">${Number(fields.original_price).toFixed(2)}</span>
            <span className="text-green-400 font-bold text-base ml-2">${Number(fields.sale_price).toFixed(2)}</span>
          </div>
          {fields.store_url ? (
            <a href={fields.store_url} target="_blank" rel="noreferrer" className="text-xs text-purple-400 hover:text-purple-300 font-medium">
              Get Deal →
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function HomeFeaturedDeals({ deals = [] }) {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Tag className="w-5 h-5 text-red-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Hot Deals</h2>
            </div>
            <p className="text-gray-400">Best discounts across all platforms right now</p>
          </div>
          <Link to="/deals" className="hidden sm:flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            All deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {deals.length === 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-40 bg-gray-800" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {deals.slice(0, 6).map((deal, i) => (
              <DealCard key={deal.id} deal={deal} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
