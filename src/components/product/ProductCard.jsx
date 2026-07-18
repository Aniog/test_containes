import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils.js'

export default function ProductCard({ product, light = false }) {
  const { addItem } = useCart()
  const textColor = light ? 'text-[var(--color-text-light)]' : 'text-[var(--color-text-dark)]'
  const mutedColor = light ? 'text-[var(--color-muted-light)]' : 'text-[var(--color-muted-dark)]'
  const borderColor = light ? 'border-[var(--color-line-light)]' : 'border-[var(--color-line-dark)]'
  const surface = light ? 'bg-[var(--color-surface-light)]' : 'bg-[var(--color-surface)]'

  return (
    <article className={`group space-y-4 ${textColor}`}>
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-[1.75rem]">
        <div className={`relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border ${borderColor} ${surface}`}>
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            data-strk-img-id={`product-card-${product.id}-primary`}
            data-strk-img={`[product-card-${product.id}-subtitle] [product-card-${product.id}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            data-strk-img-id={`product-card-${product.id}-secondary`}
            data-strk-img={`[product-card-${product.id}-subtitle] [product-card-${product.id}-title] [product-card-section-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <button
            type="button"
            className="absolute bottom-4 left-4 right-4 rounded-full bg-[rgba(245,237,230,0.92)] px-4 py-3 text-xs uppercase tracking-[0.28em] text-[var(--color-text-light)] opacity-0 shadow-lg transition duration-300 group-hover:opacity-100"
            onClick={(event) => {
              event.preventDefault()
              addItem(product, 1, 'Gold Tone')
            }}
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              id={`product-card-${product.id}-title`}
              className="font-serif text-lg uppercase tracking-[0.28em]"
            >
              {product.name}
            </p>
            <p id={`product-card-${product.id}-subtitle`} className={`text-sm ${mutedColor}`}>
              {product.subtitle}
            </p>
          </div>
          <p className="text-sm">{formatPrice(product.price)}</p>
        </div>
      </div>
    </article>
  )
}
