import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import StarRating from '../ui/StarRating'

const ProductCard = ({ product, onAddToCart, priority = false }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-[0_14px_35px_rgba(18,12,10,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(18,12,10,0.12)]">
      <Link to={`/product/${product.id}`} className="relative overflow-hidden bg-[var(--color-surface-strong)]">
        <img
          alt={product.name}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [shop-section-title]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width={priority ? '900' : '700'}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <img
          alt={`${product.name} alternate view`}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.altId}
          data-strk-img={`[${product.titleId}] [${product.descId}] warm-lit jewelry on model editorial second angle`}
          data-strk-img-ratio="4x5"
          data-strk-img-width={priority ? '900' : '700'}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 px-5 pb-5 transition duration-500 group-hover:translate-y-0">
          <button
            type="button"
            className="pointer-events-auto flex w-full items-center justify-between rounded-full bg-[rgba(248,243,236,0.92)] px-5 py-3 text-xs uppercase tracking-[0.24em] text-[var(--color-foreground)] shadow-[0_18px_40px_rgba(18,12,10,0.18)] backdrop-blur"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
          >
            Quick add
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">{product.category}</p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id={product.titleId} className="text-[1.05rem] uppercase tracking-[0.34em] text-[var(--color-foreground)]">
                {product.displayName}
              </h3>
              <p id={product.descId} className="mt-3 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
                {product.shortDescription}
              </p>
            </div>
            <p className="text-base font-medium text-[var(--color-foreground)]">${product.price}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <StarRating rating={product.rating} reviews={product.reviews} />
          <Link
            to={`/product/${product.id}`}
            className="text-xs uppercase tracking-[0.22em] text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
