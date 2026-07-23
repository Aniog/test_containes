import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext.jsx'
import { formatCurrency } from '../../lib/format.js'
import ReviewStars from './ReviewStars.jsx'

export default function ProductCard({ product, sectionTitleId, priority = false }) {
  const { addItem } = useCart()
  const titleId = `${product.slug}-card-title`
  const descId = `${product.slug}-card-desc`
  const primaryMoodId = `${product.slug}-card-mood-primary`
  const secondaryMoodId = `${product.slug}-card-mood-secondary`

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-stone-200/80 bg-[var(--velmora-cream)] p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5">
      <span id={primaryMoodId} className="sr-only">
        {product.moods[0]}
      </span>
      <span id={secondaryMoodId} className="sr-only">
        {product.moods[1]}
      </span>
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-[1.4rem] bg-stone-100">
        <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem]">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={product.imageIds.cardPrimary}
            data-strk-img={`[${primaryMoodId}] [${descId}] [${titleId}] [${sectionTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            fetchPriority={priority ? 'high' : 'auto'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={product.imageIds.cardSecondary}
            data-strk-img={`[${secondaryMoodId}] [${descId}] [${titleId}] [${sectionTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 justify-center opacity-100 transition duration-300 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <span className="rounded-full bg-[var(--velmora-ink)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white shadow-lg shadow-stone-900/20">
            View Product
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-5 text-[var(--velmora-ink)]">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{product.category}</p>
          <Link to={`/product/${product.slug}`}>
            <h3 id={titleId} className="text-xl uppercase tracking-[0.28em] text-[var(--velmora-ink)] transition hover:text-[var(--velmora-gold)]">
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="text-sm leading-6 text-stone-600">
            {product.subtitle}
          </p>
        </div>

        <ReviewStars rating={product.rating} reviews={product.reviews} />

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <p className="text-lg font-medium text-[var(--velmora-ink)]">{formatCurrency(product.price)}</p>
          <button
            type="button"
            className="rounded-full border border-[var(--velmora-gold)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--velmora-ink)] transition hover:bg-[var(--velmora-ink)] hover:text-white"
            onClick={() => addItem(product, product.tones[0], 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
