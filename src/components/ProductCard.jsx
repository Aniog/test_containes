import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import Stars from '@/components/ui/Stars'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="reveal group">
      <div className="relative overflow-hidden bg-sand">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <div className="aspect-[4/5] w-full">
            <img
              data-strk-img-id={`card-a-${product.id}`}
              data-strk-img={`[card-name-${product.id}] [card-cat-${product.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
              loading="lazy"
            />
            <img
              data-strk-img-id={`card-b-${product.id}`}
              data-strk-img={`close-up detail of [card-name-${product.id}] [card-cat-${product.id}] worn by a model, warm light`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              loading="lazy"
            />
          </div>
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => addItem(product.id, 'gold', 1)}
          className="absolute inset-x-0 bottom-0 flex h-11 translate-y-full items-center justify-center gap-2 bg-ink/90 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-sm transition-transform duration-400 ease-out hover:bg-gold-deep group-hover:translate-y-0"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add to cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <p id={`card-cat-${product.id}`} className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
          {product.categoryLabel}
        </p>
        <h3 className="mt-1.5">
          <Link
            to={`/product/${product.id}`}
            id={`card-name-${product.id}`}
            className="font-serif text-base uppercase tracking-[0.14em] text-ink transition-colors hover:text-gold-deep md:text-lg"
          >
            {product.name}
          </Link>
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars value={product.rating} className="h-3 w-3" />
          <span className="text-[11px] text-ink-muted">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm font-semibold text-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
