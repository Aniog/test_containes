import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { formatPrice, imagePlaceholder } from '@/data/storefront'
import RatingStars from './RatingStars'

export default function ProductCard({ product, onAddToCart }) {
  const titleId = `card-${product.slug}-title`
  const descId = `card-${product.slug}-desc`
  const categoryId = `card-${product.slug}-category`
  const primaryImage = product.gallery[0]
  const secondaryImage = product.gallery[1] || product.gallery[0]

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-3xl bg-ink/5">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={imagePlaceholder}
              alt={primaryImage.alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={primaryImage.imageId}
              data-strk-img={`[${descId}] [${titleId}] [${categoryId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
            />
            <img
              src={imagePlaceholder}
              alt={secondaryImage.alt}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={secondaryImage.imageId}
              data-strk-img={`[${descId}] [${titleId}] [${categoryId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
            />
          </div>
        </Link>

        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-100 transition duration-300 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product, 'Gold', 1)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-parchment px-4 py-3 text-sm font-medium uppercase tracking-button text-ink shadow-soft transition hover:bg-gold"
          >
            Quick add
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p id={categoryId} className="text-xs uppercase tracking-button text-muted">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3 id={titleId} className="mt-2 font-serif text-xl uppercase tracking-luxe text-ink sm:text-2xl">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="pt-1 text-sm font-medium text-ink">{formatPrice(product.price)}</p>
        </div>
        <p id={descId} className="mt-3 text-sm leading-6 text-muted">
          {product.shortDescription}
        </p>
        <div className="mt-4">
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </article>
  )
}
