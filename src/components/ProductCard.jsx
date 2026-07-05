import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tones[0], 1)
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] bg-sand overflow-hidden">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          loading="lazy"
        />
        {/* Secondary image (hover) */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] ${product.name} worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          loading="lazy"
          aria-hidden="true"
        />

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 backdrop-blur-sm text-ink text-xs uppercase tracking-widest2 py-3 hover:bg-gold hover:text-cream transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-wider text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-1">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
