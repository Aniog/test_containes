import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatCurrency, IMAGE_PLACEHOLDER } from '../../lib/utils'
import RatingStars from './RatingStars'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const primaryTitleId = `${product.id}-card-title`
  const primaryExcerptId = `${product.id}-card-excerpt`
  const secondaryTitleId = `${product.id}-card-hover-title`
  const secondaryExcerptId = `${product.id}-card-hover-excerpt`

  const handleQuickAdd = (event) => {
    event.preventDefault()
    addItem(product, product.variantOptions[0], 1)
  }

  return (
    <article className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[28px] bg-velmora-sand/50 shadow-card">
          <img
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition-all duration-700 ease-velvet group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={`${product.id}-primary`}
            data-strk-img={`[${primaryExcerptId}] [${primaryTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '1100' : '700'}
            loading={priority ? 'eager' : 'lazy'}
            src={IMAGE_PLACEHOLDER}
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition-all duration-700 ease-velvet group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={`${product.id}-secondary`}
            data-strk-img={`[${secondaryExcerptId}] [${secondaryTitleId}] [${primaryTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            loading="lazy"
            src={IMAGE_PLACEHOLDER}
          />
          <button
            type="button"
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full bg-velmora-parchment/95 px-4 py-3 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink opacity-100 shadow-card transition-all duration-300 ease-velvet hover:bg-white md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.8} />
            Add to Cart
          </button>
        </div>
        <div className="space-y-3 px-1 pb-1 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p
                id={primaryTitleId}
                className="font-display text-xl uppercase tracking-luxe text-velmora-ink"
              >
                {product.name}
              </p>
              <p id={primaryExcerptId} className="max-w-[22rem] text-sm leading-6 text-velmora-cocoa">
                {product.excerpt}
              </p>
            </div>
            <p className="shrink-0 text-sm font-medium uppercase tracking-[0.2em] text-velmora-cocoa">
              {formatCurrency(product.price)}
            </p>
          </div>
          <p id={secondaryTitleId} className="sr-only">
            {product.name}
          </p>
          <p id={secondaryExcerptId} className="sr-only">
            {product.hoverNote}
          </p>
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>
      </Link>
    </article>
  )
}
