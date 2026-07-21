import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product, sectionTitleId }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] ${sectionTitleId ? `[${sectionTitleId}]` : ''}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn model ${sectionTitleId ? `[${sectionTitleId}]` : ''}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.18em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 text-ink text-[11px] uppercase tracking-[0.2em] py-3 hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="text-[11px] uppercase tracking-[0.18em] font-medium text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-2">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
