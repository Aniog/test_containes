import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/cart'
import { placeholderSrc } from '@/lib/image-placeholders'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const metaId = `product-${product.id}-meta`

  return (
    <article className="group relative text-velmora-onyx">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne shadow-velmora-soft">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-card-primary-${product.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={placeholderSrc}
          />
          <img
            alt={`${product.name} detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-card-hover-${product.id}`}
            data-strk-img={`[${metaId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={placeholderSrc}
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 bg-velmora-onyx px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-onyx focus:outline-none focus:ring-2 focus:ring-velmora-gold"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
          {product.badge && (
            <span className="absolute left-4 top-4 bg-velmora-ivory/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-velmora-onyx backdrop-blur">
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <p id={metaId} className="mb-2 text-xs uppercase tracking-[0.22em] text-velmora-stone">
          {product.category} · {product.material}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="font-serif text-base uppercase tracking-[0.24em] text-velmora-onyx transition group-hover:text-velmora-antique">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-stone">
          {product.description}
        </p>
        <p className="mt-3 text-sm font-bold text-velmora-onyx">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
