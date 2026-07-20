import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../data/products'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, onAddToCart, priority = false }) {
  const query = `[${product.descId}] [${product.nameId}]`

  return (
    <article className="group overflow-hidden bg-velmora-pearl text-velmora-espresso shadow-[0_20px_60px_rgba(33,25,21,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(33,25,21,0.14)]">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/50">
          <img
            alt={product.imageAlt}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`card-${product.id}-primary`}
            data-strk-img={query}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={placeholder}
          />
          <img
            alt={`${product.name} editorial detail`}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
            data-strk-img-id={`card-${product.id}-secondary`}
            data-strk-img={`[${product.descId}] [${product.nameId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={placeholder}
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute inset-x-4 bottom-4 translate-y-3 bg-velmora-espresso px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory opacity-0 transition-all duration-300 hover:bg-velmora-champagne hover:text-velmora-espresso group-hover:translate-y-0 group-hover:opacity-100"
          >
            Quick add
          </button>
        </div>
      </Link>
      <div className="space-y-2 border-t border-velmora-sand/70 p-5">
        <div className="flex items-start justify-between gap-4">
          <Link to={`/product/${product.id}`} className="min-w-0 text-velmora-espresso hover:text-velmora-gold">
            <h3 id={product.nameId} className="font-serif text-lg uppercase leading-tight tracking-[0.18em]">
              {product.name}
            </h3>
          </Link>
          <span className="font-sans text-sm font-semibold text-velmora-espresso">{formatPrice(product.price)}</span>
        </div>
        <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-espresso/70">
          {product.description}
        </p>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-2 pt-1 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold transition-colors hover:text-velmora-espresso"
        >
          <ShoppingBag className="h-4 w-4" aria-hidden="true" />
          Add to cart
        </button>
      </div>
    </article>
  )
}
