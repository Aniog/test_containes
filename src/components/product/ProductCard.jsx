import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { getStrkImageUrl } from '@/lib/strkImages'

export default function ProductCard({ product, onAddToCart, contextLabel = 'Velmora fine jewelry' }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const categoryId = `product-${product.id}-category`
  const contextId = `product-${product.id}-context`
  const primaryImageId = `card-primary-${product.id}-velmora`
  const hoverImageId = `card-hover-${product.id}-velmora`

  return (
    <article className="group text-velmora-cocoa">
      <div className="relative overflow-hidden rounded-t-[1.75rem] bg-velmora-oat shadow-editorial">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`} className="block aspect-[4/5]">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${descId}] [${titleId}] [${contextId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(primaryImageId)}
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={hoverImageId}
            data-strk-img={`[${categoryId}] [${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(hoverImageId)}
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-4 right-4 translate-y-3 rounded-full bg-velmora-pearl px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cocoa opacity-0 shadow-lg transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </span>
        </button>
      </div>
      <div className="rounded-b-[1.75rem] border border-t-0 border-velmora-oat bg-velmora-pearl p-5">
        <p id={categoryId} className="font-sans text-[11px] uppercase tracking-[0.24em] text-velmora-taupe">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="mt-3 min-h-12 font-serifDisplay text-base uppercase leading-6 tracking-[0.22em] text-velmora-cocoa transition group-hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 font-sans text-sm leading-6 text-velmora-taupe">{product.shortDescription}</p>
        <p id={contextId} className="sr-only">{contextLabel}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-sans text-base font-semibold text-velmora-cocoa">${product.price}</span>
          <span className="flex items-center gap-1 font-sans text-xs text-velmora-taupe">
            <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" /> {product.rating}
          </span>
        </div>
      </div>
    </article>
  )
}
