import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

import StarRating from '@/components/shared/StarRating'
import { getStrkImageSource, strkPlaceholder } from '@/lib/strkImages'

const ProductCard = ({
  product,
  context = 'catalog',
  sectionId,
  onQuickAdd,
  priority = false,
}) => {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`
  const categoryId = `${context}-${product.id}-category`
  const imageQuery = sectionId
    ? `[${descId}] [${titleId}] [${sectionId}]`
    : `[${descId}] [${titleId}] [${categoryId}]`

  const primarySlotId = `${context}-${product.id}-primary-slot`
  const secondarySlotId = `${context}-${product.id}-secondary-slot`

  return (
    <article className="group flex h-full flex-col gap-4">
      <Link to={`/shop/${product.id}`} className="relative overflow-hidden rounded-[2rem] bg-velmora-mist shadow-velmora-soft">
        <div className="aspect-editorial overflow-hidden">
          <img
            data-strk-img-id={primarySlotId}
            data-strk-img={imageQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={getStrkImageSource(primarySlotId)}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
            loading={priority ? 'eager' : 'lazy'}
          />
          <img
            data-strk-img-id={secondarySlotId}
            data-strk-img={`[${titleId}] [${categoryId}] [${descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={getStrkImageSource(secondarySlotId) || strkPlaceholder}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onQuickAdd(product)
            }}
            className="btn-primary flex w-full items-center justify-center gap-2"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="space-y-3 px-1">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p id={categoryId} className="text-xs uppercase tracking-luxury text-velmora-gold">
              {product.category}
            </p>
            <Link to={`/shop/${product.id}`}>
              <h3 id={titleId} className="font-display text-2xl uppercase tracking-luxury-tight text-velmora-ink transition group-hover:text-velmora-gold">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm font-medium text-velmora-ink">${product.price}</p>
        </div>

        <p id={descId} className="text-sm leading-7 text-velmora-muted">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between gap-3">
          <StarRating rating={product.rating} reviews={product.reviews} />
          <span className="rounded-full border border-velmora-line px-3 py-1 text-xs uppercase tracking-luxury text-velmora-muted">
            {product.badge}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
