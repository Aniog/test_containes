import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, query }) {
  const { addToCart } = useCart()
  const [hovered, setHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, { tone: product.tone[0], quantity: 1 })
  }

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-champagne">
          <img
            data-strk-img-id={`product-card-${product.id}`}
            data-strk-img={query}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`h-full w-full object-cover transition-transform duration-500 ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-warm-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
              {product.badge}
            </span>
          )}

          {/* Hover second image simulation + quick add */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-end p-4 transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              type="button"
              onClick={handleQuickAdd}
              className="flex w-full items-center justify-center gap-2 bg-warm-white py-3 text-xs font-semibold uppercase tracking-widest text-ink shadow-sm transition-colors hover:bg-ink hover:text-warm-white"
            >
              <ShoppingBag size={14} />
              Quick Add
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-product text-xs font-medium text-ink">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center justify-center gap-2">
            <StarRating rating={product.rating} size={12} />
            <span className="text-[11px] text-stone">({product.reviewCount})</span>
          </div>
          <p className="mt-2 font-serif text-lg text-ink">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  )
}
