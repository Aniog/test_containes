import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import Stars from '@/components/ui/Stars'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={cn('group flex flex-col', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        <Link to={`/product/${product.slug}`}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry on neutral background`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-0' : 'opacity-100'
            )}
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn model detail`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>

        {/* Quick add */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 transition-all duration-400',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button
            type="button"
            onClick={() => addItem(product, { variant: 'Gold', quantity: 1 })}
            className="w-full bg-ink/90 text-ivory py-3.5 text-[11px] uppercase tracking-[0.2em] font-sans hover:bg-gold hover:text-ink transition-colors duration-300"
          >
            Add to Bag
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base uppercase tracking-[0.14em] text-ink"
        >
          <Link to={`/product/${product.slug}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[10px] text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-charcoal font-light">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
