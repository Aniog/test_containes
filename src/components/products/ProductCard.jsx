import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import RatingStars from './RatingStars'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()
  const primaryId = `${product.id}-card-image-primary`
  const secondaryId = `${product.id}-card-image-secondary`
  const titleId = `${product.id}-card-title`
  const descriptionId = `${product.id}-card-description`

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-line bg-surface text-ink shadow-card transition-all duration-500 ease-luxe hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-accent-soft/35">
          <img
            alt={product.name}
            data-strk-img-id={primaryId}
            data-strk-img={`[${descriptionId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            alt={`${product.name} styled on model`}
            data-strk-img-id={secondaryId}
            data-strk-img={`[${descriptionId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addItem(product, product.variants[0], 1)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-surface-alt px-4 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-surface transition-colors duration-300 hover:bg-accent"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-4 px-5 py-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {product.badge}
          </span>
          <span className="text-sm font-semibold text-ink">{formatPrice(product.price)}</span>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-ink-muted">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`}>
            <h3
              id={titleId}
              className="font-serif text-2xl uppercase leading-[1.08] tracking-[0.16em] text-ink"
            >
              {product.displayName}
            </h3>
          </Link>
          <p id={descriptionId} className="text-sm leading-7 text-ink-muted">
            {product.shortDescription}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          <span className="text-xs uppercase tracking-[0.22em] text-ink-muted">
            {product.material}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
