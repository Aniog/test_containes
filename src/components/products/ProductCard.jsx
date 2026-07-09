import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import StarRating from './StarRating'

export default function ProductCard({ product, onAddToCart, context = 'product-card' }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`

  return (
    <article className="group text-velmora-ink">
      <Link to={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand shadow-soft">
          <img
            alt={product.name}
            data-strk-img-id={`${context}-${product.imgId}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            alt={`${product.name} styled`}
            data-strk-img-id={`${context}-${product.hoverImgId}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product, { variant: 'Gold Tone', quantity: 1 })
            }}
            className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-pearl px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink opacity-0 shadow-soft transition duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-velmora-bronze">{product.category}</p>
            <Link to={`/products/${product.id}`}>
              <h3 id={titleId} className="mt-2 font-serif text-xl font-semibold uppercase tracking-[0.18em] text-velmora-ink transition hover:text-velmora-bronze">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm font-bold text-velmora-ink">{formatPrice(product.price)}</p>
        </div>
        <p id={descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-cocoa">{product.description}</p>
        <div className="mt-4">
          <StarRating rating={product.rating} reviews={product.reviews} compact />
        </div>
      </div>
    </article>
  )
}
