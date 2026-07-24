import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from '@/components/StarRating'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [adding, setAdding] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    addItem(product, { variant: product.variants[0], quantity: 1 })
    setTimeout(() => setAdding(false), 800)
  }

  const [primary, secondary] = product.images

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn('group block', className)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4x5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={primary.imgId}
          data-strk-img={`[${primary.titleId}] [${primary.descId}] gold jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 transition-transform duration-700 group-hover:scale-105"
        />
        {/* Secondary image (revealed on hover) */}
        {secondary && (
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={secondary.imgId}
            data-strk-img={`[${secondary.titleId}] [${secondary.descId}] gold jewelry worn`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={handleQuickAdd}
            disabled={adding}
            className="w-full bg-ivory/95 backdrop-blur-sm text-ink py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-ink transition-colors disabled:opacity-70"
          >
            {adding ? 'Added' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone mb-1.5">{product.type}</p>
        <h3
          id={primary.titleId}
          className="font-serif text-lg text-charcoal uppercase tracking-[0.12em] leading-snug"
        >
          {product.name}
        </h3>
        <p id={primary.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm text-charcoal mt-2 font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
