import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import RatingStars from './RatingStars'

export default function ProductCard({ product, onAddToCart, priority = false }) {
  if (!product) return null
  const primary = product.images?.[0]
  const hover = product.images?.[1] || primary

  return (
    <article className="group relative flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-beige aspect-[4/5]"
        aria-label={product.name}
      >
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`card-${product.id}-primary`}
          data-strk-img={primary}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading={priority ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={`card-${product.id}-hover`}
          data-strk-img={hover}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-creamLight/95 backdrop-blur-sm text-espresso text-[9px] tracking-widest3 uppercase font-medium px-2.5 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add — visible on hover (desktop) / always visible on mobile */}
        {onAddToCart && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAddToCart(product)
            }}
            className={cn(
              'absolute bottom-3 left-3 right-3 z-10',
              'flex items-center justify-center gap-2',
              'bg-creamLight/95 backdrop-blur-sm text-espresso',
              'py-3 px-4 text-[10px] tracking-widest2 uppercase font-medium',
              'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0',
              'transition-all duration-500 ease-out',
              'hover:bg-espresso hover:text-cream'
            )}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            <span>Quick Add</span>
          </button>
        )}
      </Link>

      <div className="pt-5 pb-2 px-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-[11px] tracking-widest2 uppercase font-medium text-espresso truncate">
              {product.name}
            </h3>
            <p className="mt-1 text-[10px] tracking-widest2 uppercase text-espresso/50 font-light">
              {product.eyebrow}
            </p>
          </div>
          <p className="font-serif text-[20px] text-espresso leading-none mt-0.5 shrink-0">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="mt-2.5">
          <RatingStars value={product.rating} count={product.reviews} size={12} />
        </div>
      </div>
    </article>
  )
}
