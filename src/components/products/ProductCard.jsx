import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'

export default function ProductCard({ product, onAddToCart, compact = false, scope = 'product-card' }) {
  const titleId = `${scope}-${product.id}-title`
  const descId = `${scope}-${product.id}-desc`
  const materialId = `${scope}-${product.id}-material`

  return (
    <article className="group overflow-hidden border border-velmora-sand/70 bg-velmora-pearl text-velmora-ink shadow-velmora transition duration-500 hover:-translate-y-1 hover:shadow-velmora-lg">
      <Link to={`/product/${product.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush/40" aria-label={`${product.name} jewelry product view`} role="img">
          <div
            className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            style={{ backgroundImage: `url(${product.imageAlt || product.image})` }}
          />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-velmora-pearl/90 px-3 py-1 text-xs font-medium uppercase tracking-ui text-velmora-bronze backdrop-blur">
              {product.badge}
            </span>
          )}
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-ui text-velmora-ivory opacity-0 transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className={compact ? 'p-4' : 'p-5'}>
        <div className="mb-2 flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
          <span className="ml-2 text-xs text-velmora-bronze">{product.reviews}</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={titleId} className="font-serif text-lg uppercase leading-tight tracking-product text-velmora-ink transition hover:text-velmora-bronze">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 text-sm leading-6 text-velmora-bronze">
          {product.shortDescription}
        </p>
        <p id={materialId} className="sr-only">
          {product.material}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-sand/60 pt-4">
          <span className="text-sm uppercase tracking-ui text-velmora-bronze">{product.category}</span>
          <span className="font-semibold text-velmora-ink">${product.price}</span>
        </div>
      </div>
    </article>
  )
}
