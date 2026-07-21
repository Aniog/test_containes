import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/ToastContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [hovered, setHovered] = useState(false)

  const titleId = `pc-${product.id}-title`
  const descId = `pc-${product.id}-desc`
  const defaultTone = product.tone?.[0] || 'Gold'

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, defaultTone, 1)
    toast(`Added ${product.name} to bag`)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`pc-${product.id}-img1`}
          data-strk-img={`[${descId}] [${titleId}] gold jewelry editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Secondary image revealed on hover */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={`pc-${product.id}-img2`}
          data-strk-img={`[${descId}] [${titleId}] gold jewelry worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest3 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute inset-x-3 bottom-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-espresso/90 py-3 text-[11px] uppercase tracking-widest3 text-ivory backdrop-blur-sm transition-colors hover:bg-gold"
          >
            Add to Bag
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-base uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.short}
        </p>
        <div className="mt-1 flex items-center justify-center">
          <StarRating value={product.rating} size={12} showValue count={product.reviews} />
        </div>
        <p className="mt-2 text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
