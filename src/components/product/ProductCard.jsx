import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden mb-4">
        {/* Primary image */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, #d4c5a0 0%, #e8dcc8 40%, #c9b88a 100%)',
            opacity: hovered ? 0 : 1,
          }}
        />

        {/* Hover image */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, #c9b88a 0%, #b8a67a 40%, #d4c5a0 100%)',
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Sale badge */}
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
            Sale
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 bg-velmora-black/90 text-white py-3 flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-medium transition-all duration-300 translate-y-full group-hover:translate-y-0"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-sm md:text-base text-velmora-black leading-tight">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
              />
            ))}
          </div>
          <span className="text-[11px] text-velmora-muted">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-velmora-black">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-velmora-warm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
