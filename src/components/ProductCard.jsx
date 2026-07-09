import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from './StarRating'

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
        <div
          data-strk-bg-id={`product-card-${product.id}`}
          data-strk-bg={`[${descId}] [${titleId}]`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          role="img"
          aria-label={product.name}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          data-strk-bg-id={`product-card-alt-${product.id}`}
          data-strk-bg={`[${titleId}] jewelry on model`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          role="img"
          aria-label={`${product.name} worn`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
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
