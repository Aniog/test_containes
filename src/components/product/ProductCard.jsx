import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Check } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StockImage from '@/components/ui/StockImage'

export default function ProductCard({ product, eager = false }) {
  const { addItem, justAdded } = useCart()
  const [hovered, setHovered] = useState(false)
  const primary = product.images[0]
  const secondary = product.images[1] || product.images[0]
  const isJustAdded = justAdded === product.id

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-cream-2 aspect-[3/4]"
        aria-label={product.name}
      >
        {/* Primary image */}
        <StockImage
          imgId={`${product.id}-primary`}
          query={`[${product.textIds.title}] ${primary.query}`}
          ratio="3x4"
          width={800}
          alt={product.name}
          eager={eager}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft',
            hovered && secondary !== primary ? 'opacity-0' : 'opacity-100'
          )}
        />
        {/* Secondary image (revealed on hover) */}
        {secondary !== primary && (
          <StockImage
            imgId={`${product.id}-secondary`}
            query={`[${product.textIds.desc}] ${secondary.query}`}
            ratio="3x4"
            width={800}
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 bg-bone/90 text-espresso text-[10px] uppercase tracking-widest-2 px-2.5 py-1 font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add — desktop hover only */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            addItem(product.id, 1, 'default')
          }}
          className={cn(
            'absolute bottom-3 left-3 right-3 bg-bone/95 text-espresso border border-line',
            'py-3 text-[11px] uppercase tracking-widest-2 font-medium',
            'transition-all duration-500 ease-out-soft',
            'hidden md:flex items-center justify-center gap-2',
            'hover:bg-espresso hover:text-cream',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          )}
          aria-label={`Add ${product.name} to bag`}
        >
          {isJustAdded ? (
            <>
              <Check className="w-4 h-4" strokeWidth={1.5} />
              Added
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" strokeWidth={1.5} />
              Add to Bag
            </>
          )}
        </button>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link to={`/product/${product.id}`} className="product-name block">
            {product.name}
          </Link>
          <p className="mt-1 text-[12px] text-muted line-clamp-1">
            {product.shortDescription}
          </p>
        </div>
        <span className="text-sm text-espresso font-medium tabular-nums flex-shrink-0">
          {formatPrice(product.price)}
        </span>
      </div>
    </article>
  )
}
