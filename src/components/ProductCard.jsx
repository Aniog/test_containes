import { ShoppingBag, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative bg-velmora-cream text-velmora-ink">
      <p id={product.hoverId} className="sr-only">{product.hoverText}</p>
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative overflow-hidden bg-velmora-parchment shadow-soft">
          <img
            alt={product.name}
            className={`w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0 ${compact ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="720"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} worn detail`}
            className={`absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100 ${compact ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.hoverId}] [${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="720"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute inset-x-4 bottom-4 translate-y-3 bg-velmora-ink px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cream opacity-0 shadow-soft transition duration-300 hover:bg-velmora-champagne hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100"
          >
            <span className="inline-flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Add to Cart</span>
          </button>
        </div>
      </Link>
      <div className="border-b border-velmora-mist py-5">
        <div className="mb-2 flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} star rating`}>
          {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-3.5 w-3.5 fill-current" />)}
          <span className="ml-2 text-xs font-medium text-velmora-ink/65">{product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-luxury text-velmora-ink transition hover:text-velmora-bronze">{product.name}</h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-ink/70">{product.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-velmora-bronze">{product.category}</p>
        </div>
      </div>
    </article>
  )
}
