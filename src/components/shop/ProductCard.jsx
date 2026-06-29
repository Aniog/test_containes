import { Link } from 'react-router-dom'
import RatingStars from '@/components/ui/RatingStars'
import { useCart } from '@/hooks/useCart'

const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const ProductCard = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const categoryId = `product-${product.id}-category`
  const primaryImage = product.gallery[0]
  const secondaryImage = product.gallery[1] || product.gallery[0]

  return (
    <article className="group flex h-full flex-col bg-[var(--color-card)] text-[var(--color-text-primary)] shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1">
      <Link to={`/shop/${product.id}`} className="relative block overflow-hidden bg-[var(--color-surface-strong)]">
        <div className="relative aspect-[4/5]">
          <img
            src={imagePlaceholder}
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={`${primaryImage.id}-main`}
            data-strk-img={`[${descId}] [${titleId}] [${categoryId}]`}
            data-strk-img-ratio={primaryImage.ratio}
            data-strk-img-width={primaryImage.width}
          />
          <img
            src={imagePlaceholder}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={`${secondaryImage.id}-thumb`}
            data-strk-img={`[${titleId}] [${descId}] [${categoryId}]`}
            data-strk-img-ratio={secondaryImage.ratio}
            data-strk-img-width="240"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              addItem(product, { color: 'Gold', quantity: 1 })
            }}
            className="pointer-events-auto w-full border border-[var(--color-accent)] bg-[var(--color-ink)]/90 px-4 py-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-on-dark)] backdrop-blur transition hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 px-4 py-5 md:px-5">
        <div className="space-y-2">
          <p id={categoryId} className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h3 id={titleId} className="font-serif-display text-2xl uppercase tracking-[0.22em] text-[var(--color-text-primary)]">
                {product.name}
              </h3>
              <p id={descId} className="max-w-xs text-sm leading-6 text-[var(--color-text-secondary)]">
                {product.description}
              </p>
            </div>
            <span className="shrink-0 text-sm uppercase tracking-[0.24em] text-[var(--color-text-primary)]">
              ${product.price}
            </span>
          </div>
        </div>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
      </div>
    </article>
  )
}

export default ProductCard
