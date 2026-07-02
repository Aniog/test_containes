import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { StarRating } from './StarRating'
import { formatPrice, cn } from '../lib/utils'
import { useCart } from '../context/CartContext'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function ProductCard({ product, showQuickAdd = true }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const fields = product.data
  const titleId = `product-title-${fields.slug}`
  const descId = `product-desc-${fields.slug}`
  const queryId = `product-query-${fields.slug}`
  const variant = fields.variants?.[0] || null

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, variant, 1)
  }

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${fields.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
          <img
            alt={fields.name}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-transform duration-700',
              isHovered && 'scale-105'
            )}
            data-strk-img-id={`product-card-${fields.slug}`}
            data-strk-img={`[${queryId}] [${titleId}] [${descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={placeholder}
          />
          {fields.bestseller && (
            <span className="absolute left-3 top-3 bg-cream/90 px-2 py-1 text-[10px] font-sans uppercase tracking-widest text-ink">
              Bestseller
            </span>
          )}
          {showQuickAdd && (
            <button
              type="button"
              onClick={handleQuickAdd}
              className={cn(
                'absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-ink/90 py-3 text-xs font-sans uppercase tracking-widest text-cream transition-transform duration-300 md:translate-y-full md:group-hover:translate-y-0',
                'hover:bg-ink focus-visible:bg-ink'
              )}
              aria-label={`Add ${fields.name} to cart`}
            >
              <ShoppingBag size={14} />
              Quick Add
            </button>
          )}
        </div>
      </Link>

      <div className="mt-4 text-center">
        <StarRating rating={fields.rating || 0} count={fields.review_count || 0} size={12} />
        <h3 className="product-name mt-2 text-sm font-medium text-ink">
          <Link to={`/products/${fields.slug}`}>
            <span id={titleId}>{fields.name}</span>
          </Link>
        </h3>
        <p id={descId} className="sr-only">
          {fields.description}
        </p>
        <span id={queryId} className="sr-only">
          {fields.image_query}
        </span>
        <p className="mt-1 font-sans text-sm text-taupe-dark">{formatPrice(fields.price)}</p>
      </div>
    </article>
  )
}
