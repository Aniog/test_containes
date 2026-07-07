import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-velmora-linen/80 bg-velmora-mist text-velmora-espresso transition duration-500 hover:-translate-y-1 hover:border-velmora-champagne hover:shadow-glow">
      <Link to={`/product/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-primary-${product.id}`}
            data-strk-img={`[product-type-${product.id}] [product-name-${product.id}] warm gold jewelry editorial still life`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-hover-${product.id}`}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] jewelry worn on model warm light`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-mist shadow-soft transition hover:bg-velmora-bronze"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to cart
            </button>
          </div>
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-velmora-mist/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-velmora-bronze backdrop-blur">
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className={compact ? 'p-4' : 'p-5'}>
        <p id={`product-type-${product.id}`} className="text-[11px] font-bold uppercase tracking-[0.24em] text-velmora-bronze">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`product-name-${product.id}`} className="mt-2 font-serifDisplay text-xl font-semibold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-bronze">
            {product.name}
          </h3>
        </Link>
        {!compact && (
          <p id={`product-desc-${product.id}`} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-cocoa">
            {product.shortDescription}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-velmora-linen/80 pt-4">
          <span className="text-sm font-bold text-velmora-espresso">${product.price}</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-velmora-cocoa">{product.type}</span>
        </div>
      </div>
    </article>
  )
}
