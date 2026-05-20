import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShoppingCart } from 'lucide-react'
import { PLATFORM_CONFIG } from '../../lib/utils.js'

function ProductCard({ product, onAddToCart }) {
  const fields = product.data
  const platform = PLATFORM_CONFIG[fields.platform] || PLATFORM_CONFIG.steam
  const hasDiscount = fields.discount_percent > 0

  return (
    <div className="group bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/10">
      {/* Cover */}
      <div className="relative h-40 bg-gradient-to-br from-[#22222f] to-[#1a1a24] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-10">🎮</div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent" />
        {hasDiscount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            -{fields.discount_percent}%
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${platform.badge}`}>
            {platform.label}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-slate-100 font-bold text-sm mb-1 line-clamp-1 group-hover:text-violet-300 transition-colors">
          {fields.title}
        </h3>
        {fields.genre && <p className="text-slate-600 text-xs mb-2">{fields.genre}</p>}

        {fields.rating && (
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 text-xs font-semibold">{fields.rating.toFixed(1)}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-slate-100 font-extrabold">${fields.price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-slate-600 text-xs line-through">${fields.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart && onAddToCart(product)}
            className="flex items-center gap-1 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default function HomeStorePreview({ products = [], onAddToCart }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Featured in Store
          </h2>
          <p className="text-slate-500 mt-1 text-sm">Top picks from our game collection</p>
        </div>
        <Link
          to="/store"
          className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-semibold transition-colors"
        >
          Browse store <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 text-slate-600">No products yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  )
}
