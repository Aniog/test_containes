import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative border border-velmora-mist/80 bg-velmora-ivory text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-luxury">
      <Link to={`/products/${product.slug}`} className="block premium-focus" aria-label={`View ${product.name}`}>
        <div className="relative aspect-product overflow-hidden bg-velmora-parchment">
          <img
            className="editorial-image group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-primary-${product.id}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-heading]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} gold jewelry product photo`}
          />
          <img
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
            data-strk-img-id={`product-secondary-${product.id}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} styled on model`}
          />
          <div className="absolute left-4 top-4 border border-velmora-ivory/60 bg-velmora-ink/72 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-luxury text-velmora-ivory backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id={product.titleId} className="font-serif text-lg font-semibold uppercase leading-tight tracking-luxury-wide text-velmora-ink sm:text-xl">
              {product.name}
            </h3>
            {!compact && (
              <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-espresso/75">
                {product.description}
              </p>
            )}
          </div>
          <p className="shrink-0 font-sans text-sm font-semibold text-velmora-ink">${product.price}</p>
        </div>

        <div className="flex items-center justify-between border-t border-velmora-mist/80 pt-3">
          <div className="flex items-center gap-1 text-velmora-antique" aria-label={`${product.rating} out of 5 stars`}>
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-semibold text-velmora-espresso/75">{product.rating.toFixed(1)}</span>
          </div>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 border border-velmora-champagne bg-velmora-champagne px-3 py-2 text-[0.68rem] font-bold uppercase tracking-luxury text-velmora-ink transition duration-300 hover:bg-velmora-antique hover:text-velmora-ivory premium-focus md:opacity-0 md:translate-y-2 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
