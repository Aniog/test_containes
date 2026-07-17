import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { formatPrice } from '@/data/storefront'

const ProductCard = ({ product, onQuickAdd, sectionId = 'shop-grid' }) => {
  const titleId = `${sectionId}-${product.slug}-title`
  const subtitleId = `${sectionId}-${product.slug}-subtitle`
  const primaryPromptId = `${sectionId}-${product.slug}-prompt-primary`
  const secondaryPromptId = `${sectionId}-${product.slug}-prompt-secondary`
  const primaryImageId = `${product.slug}-primary-card-image`
  const secondaryImageId = `${product.slug}-secondary-card-image`

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-[2rem] border border-velmora-mist/60 bg-velmora-paper text-velmora-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-velmora"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-velmora-shell/70 p-3">
        <span id={primaryPromptId} className="sr-only">
          {product.imageDescriptors[0]}
        </span>
        <span id={secondaryPromptId} className="sr-only">
          {product.imageDescriptors[1]}
        </span>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-velmora-shell">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${primaryPromptId}] [${subtitleId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            data-strk-img-id={secondaryImageId}
            data-strk-img={`[${secondaryPromptId}] [${subtitleId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />

          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onQuickAdd?.(product)
            }}
            className="absolute inset-x-4 bottom-4 rounded-full bg-velmora-paper/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink opacity-100 shadow-soft transition hover:bg-velmora-paper md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-3 px-5 pb-6 pt-1">
        <p id={subtitleId} className="text-xs uppercase tracking-[0.24em] text-velmora-taupe">
          {product.category}
        </p>
        <div className="flex items-start justify-between gap-3">
          <h3
            id={titleId}
            className="font-display text-2xl uppercase tracking-[0.18em] text-velmora-ink"
          >
            {product.name}
          </h3>
          <span className="pt-1 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-velmora-taupe">
          <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
          <span>
            {product.rating} · {product.reviewCount} reviews
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
