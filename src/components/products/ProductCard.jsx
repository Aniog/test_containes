import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import RatingStars from '@/components/common/RatingStars'
import { formatPrice } from '@/data/storefront'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const titleId = `${product.id}-card-title`
  const descId = `${product.id}-card-desc`
  const badgeId = `${product.id}-card-badge`
  const primaryNoteId = `${product.id}-card-primary-note`
  const secondaryNoteId = `${product.id}-card-secondary-note`

  return (
    <article className="group flex h-full flex-col gap-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-velmora-sand shadow-soft">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.shortName}
              loading={priority ? 'eager' : 'lazy'}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-velvet group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={`${product.id}-primary-image`}
              data-strk-img={`[${primaryNoteId}] [${descId}] [${titleId}] [${badgeId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.shortName} alternate view`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-velvet group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={`${product.id}-secondary-image`}
              data-strk-img={`[${secondaryNoteId}] [${descId}] [${titleId}] [${badgeId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
            />
          </div>
        </Link>

        <button
          type="button"
          className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-full bg-velmora-ink px-4 py-3 text-sm font-medium text-velmora-cream shadow-soft transition duration-300 ease-velvet hover:bg-velmora-panel md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={() => addItem(product)}
        >
          <Plus className="h-4 w-4" /> Quick Add
        </button>
      </div>

      <div className="sr-only">
        <span id={primaryNoteId}>{product.imageNotes[0]}</span>
        <span id={secondaryNoteId}>{product.imageNotes[1] || product.imageNotes[0]}</span>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-1">
        <div className="flex items-center justify-between gap-3">
          <span
            id={badgeId}
            className="rounded-full border border-velmora-line px-3 py-1 text-[11px] uppercase tracking-eyebrow text-velmora-muted"
          >
            {product.badge}
          </span>
          <p className="text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
        </div>

        <div className="space-y-2">
          <Link to={`/product/${product.slug}`}>
            <h3 id={titleId} className="font-display text-2xl tracking-product text-velmora-ink transition duration-300 group-hover:text-velmora-gold">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-velmora-muted">{product.silhouette}</p>
          <p id={descId} className="text-sm leading-7 text-velmora-muted">
            {product.description}
          </p>
        </div>

        <RatingStars rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}

export default ProductCard
