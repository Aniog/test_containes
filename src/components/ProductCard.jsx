import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from './StarRating'

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, queryIds = {} }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const titleId = queryIds.titleId || `product-title-${product.id}`
  const descId = queryIds.descId || `product-desc-${product.id}`

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.defaultVariant, 1)
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 mb-4">
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER_SRC}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={`product-card-alt-${product.id}`}
          data-strk-img={`[${titleId}] jewelry on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER_SRC}
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <button
          type="button"
          onClick={handleAdd}
          className={`absolute bottom-0 inset-x-0 bg-velmora-cream/95 text-velmora-espresso py-3 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-transform duration-300 ${
            hovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      <div className="space-y-1.5">
        <h3
          id={titleId}
          className="font-serif text-sm sm:text-base uppercase tracking-widest-xl"
        >
          {product.name}
        </h3>
        <p id={descId} className="text-xs text-velmora-taupe line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Link>
  )
}
