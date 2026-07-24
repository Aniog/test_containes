import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] || 'Gold')
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-velmora-surface-hover mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Hover overlay with second image */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            data-strk-img-id={product.secondaryImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail closeup`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 btn-primary text-xs py-3 justify-center transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} className="mr-2" />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-velmora-text group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
              />
            ))}
          </div>
          <span className="text-xs text-velmora-text-light">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <p className="text-sm font-medium text-velmora-text">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
