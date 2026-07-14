import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

// NOTE: `src` must be an inline string literal (not a const) so the strk-img
// build plugin can statically resolve and inline the image URL at build time.
export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const titleId = `pc-${product.id}-title`
  const tagId = `pc-${product.id}-tag`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, { quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-cream overflow-hidden">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${tagId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image on hover */}
        <img
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${tagId}] ${product.name} worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-ivory/90 backdrop-blur-sm text-ink text-[10px] font-semibold uppercase tracking-widest2 px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-medium uppercase tracking-widest2 bg-ink/90 backdrop-blur-sm text-ivory hover:bg-ink transition-colors duration-300"
          >
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-lg uppercase tracking-widest2 text-ink leading-tight"
        >
          {product.name}
        </h3>
        <p id={tagId} className="text-xs text-stone mt-1">
          {product.tagline}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
