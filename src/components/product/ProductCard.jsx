import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`card-${product.id}-a`}
          data-strk-img={`[card-desc-${product.id}] [card-title-${product.id}] gold jewelry editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        {/* Secondary image revealed on hover */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={`card-${product.id}-b`}
          data-strk-img={`[card-desc-${product.id}] ${product.category.toLowerCase()} worn model gold jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-widest3 px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className="absolute inset-x-3 bottom-3 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 text-cream text-xs uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 hover:bg-ink transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={`card-title-${product.id}`}
          className="font-serif text-base md:text-lg text-ink uppercase tracking-wider leading-tight"
        >
          {product.name}
        </h3>
        <p
          id={`card-desc-${product.id}`}
          className="sr-only"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-champagne text-champagne" />
          <span className="text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="text-sm text-ink mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
