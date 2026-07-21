import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, onAddToCart, priority = false }) {
  const primaryId = `${product.id}-card-primary-title`
  const primaryDescId = `${product.id}-card-primary-desc`
  const secondaryId = `${product.id}-card-secondary-title`
  const secondaryDescId = `${product.id}-card-secondary-desc`

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-velmora-stone/15 bg-velmora-ivory shadow-soft transition duration-300 ease-velvet hover:-translate-y-1 hover:shadow-velvet">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[1.75rem] bg-velmora-sand">
        <Link className="block h-full" to={`/product/${product.slug}`}>
          <img
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-velvet group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imageIds.primary}
            data-strk-img={`[${primaryDescId}] [${primaryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 ease-velvet group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.imageIds.secondary}
            data-strk-img={`[${secondaryDescId}] [${secondaryId}] [${primaryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>
        <div className="absolute left-4 top-4 rounded-full border border-velmora-ivory/50 bg-velmora-ink/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-velmora-ivory backdrop-blur-sm">
          {product.badge}
        </div>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 z-10 flex translate-y-4 items-center justify-between rounded-full bg-velmora-ivory/95 px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink opacity-0 shadow-soft transition duration-300 ease-velvet group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span>Quick Add</span>
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.26em] text-velmora-stone">
                {product.category}
              </p>
              <Link to={`/product/${product.slug}`}>
                <h3
                  id={primaryId}
                  className="font-serif text-2xl uppercase tracking-luxe text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
                >
                  {product.name}
                </h3>
              </Link>
            </div>
            <span className="pt-1 text-sm font-semibold text-velmora-ink">
              {formatPrice(product.price)}
            </span>
          </div>
          <p id={primaryDescId} className="text-sm leading-7 text-velmora-stone">
            {product.shortDescription}
          </p>
          <p id={secondaryId} className="sr-only">
            {product.name} alternate styling view
          </p>
          <p id={secondaryDescId} className="sr-only">
            {product.shortDescription}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-auto rounded-full border border-velmora-stone/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink transition duration-300 ease-velvet hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-ink"
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}
