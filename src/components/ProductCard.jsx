import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

export default function ProductCard({ product, children }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image — children provided by parent so strk-img plugin can resolve IDs at build time */}
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
        {children}
        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-obsidian/90 backdrop-blur-sm text-cream text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-ink group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}`}
            />
          ))}
          <span className="text-xs text-ink-muted ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-ink mt-2">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}

export function ProductCardImage({ product }) {
  return (
    <img
      data-strk-img-id={`product-card-${product.id}`}
      data-strk-img={`[${product.descId}] [${product.titleId}]`}
      data-strk-img-ratio="3x4"
      data-strk-img-width="600"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  )
}
