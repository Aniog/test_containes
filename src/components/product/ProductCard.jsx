import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const variant = product.variants[0]
    addItem(product, variant)
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4 rounded-sm">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`${product.name} gold jewelry demi-fine`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100'
          }`}
        />

        {/* Secondary image on hover */}
        <img
          alt={`${product.name} alternate`}
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`${product.name} jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 bg-velmora-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-white ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Info */}
      <p className="product-name text-velmora-text group-hover:text-velmora-gold transition-colors duration-300">
        {product.name}
      </p>
      <div className="flex items-center gap-1.5 mt-1">
        <Star size={12} className="text-velmora-gold fill-velmora-gold" />
        <span className="text-xs text-velmora-muted">
          {product.rating} ({product.reviewCount})
        </span>
      </div>
      <p className="product-price mt-1">${product.price}</p>
    </Link>
  )
}
