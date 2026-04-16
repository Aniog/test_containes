import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { PlatformBadge, StarRating } from '../ui/GameUI'

function ProductCard({ product, onAddToCart }) {
  const d = product.data
  const hasDiscount = d.original_price && d.original_price > d.price
  const discountPct = hasDiscount ? Math.round((1 - d.price / d.original_price) * 100) : 0

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative h-44 overflow-hidden">
        <img
          src={d.cover_image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80'}
          alt={d.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <PlatformBadge platform={d.platform} />
          {hasDiscount && (
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-500 text-white">-{discountPct}%</span>
          )}
        </div>
        {d.featured && (
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-yellow-500/90 text-black text-xs font-bold rounded">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-base leading-snug mb-1 line-clamp-1">{d.title}</h3>
        <div className="flex items-center justify-between mb-3">
          <StarRating rating={d.rating} />
          <span className="text-gray-500 text-xs">{d.genre}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">${d.price?.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-gray-500 text-sm line-through">${d.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedProducts({ products, loading, onAddToCart }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-white">🎮 Featured Games</h2>
          <p className="text-gray-400 mt-1">Top picks from our store</p>
        </div>
        <Link
          to="/store"
          className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
        >
          Visit store <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden animate-pulse">
              <div className="h-44 bg-gray-700" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-700 rounded w-3/4" />
                <div className="h-3 bg-gray-700 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  )
}
