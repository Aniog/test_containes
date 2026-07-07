import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { getStrkImageUrl } from '@/lib/strk-images'
import StarRating from '@/components/StarRating'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { quantity: 1 })
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          src={getStrkImageUrl(product.imgId)}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-luxury group-hover:opacity-0"
        />
        {/* Secondary image (hover) */}
        <img
          src={getStrkImageUrl(product.imgId2)}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-luxury group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 backdrop-blur-sm text-ink text-[11px] uppercase tracking-[0.2em] font-semibold py-3.5 hover:bg-champagne transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">{product.type}</p>
        <h3
          id={`card-${product.id}-name`}
          className="font-serif text-lg uppercase tracking-[0.12em] text-ink"
        >
          {product.name}
        </h3>
        <p id={`card-${product.id}-desc`} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-2">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
