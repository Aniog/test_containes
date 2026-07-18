import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product, className = '' }) {
  const { addItem } = useCart()
  const [tone, setTone] = useState(product.tones[0])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addItem(product, tone, 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt=""
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] worn model ${product.name}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.18em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 text-cream text-[11px] uppercase tracking-[0.18em] py-3.5 hover:bg-gold transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <StarRating value={product.rating} className="justify-center mb-2" size={12} />
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.14em] text-ink group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.short}
        </p>
        <p className="text-sm text-gold mt-1 tracking-wide">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
