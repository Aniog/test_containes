import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/cart'
import RatingStars from './RatingStars'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, onAddToCart, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const materialId = `product-${product.id}-material`

  return (
    <article className="group rounded-[1.75rem] border border-velmora-mist/80 bg-velmora-pearl text-velmora-ink shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <Link to={`/product/${product.slug}`} className="block overflow-hidden rounded-t-[1.75rem] text-velmora-ink">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen">
          <img
            alt={`${product.name} demi-fine jewelry`}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-primary-${product.id}-a91f`}
            data-strk-img={`[${descId}] [${titleId}] [${materialId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <img
            alt={`${product.name} styled on model`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-hover-${product.id}-b72e`}
            data-strk-img={`[${materialId}] [${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <div className="absolute left-4 top-4 rounded-full bg-velmora-pearl/92 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-velmora-cocoa shadow-soft">
            {product.badge}
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-pearl opacity-0 shadow-soft transition duration-300 hover:bg-velmora-champagne hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" /> Quick Add
          </button>
        </div>
      </Link>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <p id={materialId} className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-velmora-cocoa/70">
            {product.material}
          </p>
          <RatingStars rating={product.rating} reviews={product.reviews} compact />
        </div>
        <Link to={`/product/${product.slug}`} className="text-velmora-ink hover:text-velmora-cocoa">
          <h3 id={titleId} className="font-serif text-lg uppercase leading-tight tracking-[0.18em] sm:text-xl">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-cocoa/78">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-mist pt-4">
          <span className="font-sans text-base font-bold text-velmora-ink">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="rounded-full border border-velmora-champagne px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-velmora-ink transition hover:bg-velmora-champagne hover:text-velmora-ink"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
