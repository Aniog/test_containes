import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group relative overflow-hidden border border-velmora-champagne/70 bg-velmora-cream text-velmora-ink transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(40,54,47,0.12)]">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-ivory">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <div className="absolute left-3 top-3 bg-velmora-cream/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-velmora-cocoa backdrop-blur">
            {product.badge}
          </div>
        </div>
      </Link>

      <div className="space-y-3 p-4 md:p-5">
        <div className="flex items-center gap-1 text-velmora-bronze" aria-label={`${product.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
          ))}
          <span className="ml-1 font-sans text-xs text-velmora-cocoa">{product.reviews}</span>
        </div>
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-[0.18em] text-velmora-ink transition group-hover:text-velmora-bronze md:text-base">
              {product.name}
            </h3>
          </Link>
          <p id={product.descId} className={`${compact ? 'sr-only' : 'mt-2 line-clamp-2'} font-sans text-sm leading-6 text-velmora-cocoa`}>
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between border-t border-velmora-champagne/70 pt-3">
          <span className="font-sans text-sm font-semibold text-velmora-ink">${product.price}</span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-2 rounded-none border border-velmora-bronze px-3 py-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-velmora-bronze transition hover:bg-velmora-bronze hover:text-velmora-cream"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
