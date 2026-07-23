import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Heart } from 'lucide-react'
import { formatPrice, cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <article
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-surface-100 rounded-lg overflow-hidden mb-4">
        <img
          data-strk-img-id={`product-${product.id}`}
          data-strk-img={`[${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-surface-900 text-ivory text-caption tracking-wider uppercase px-3 py-1.5 rounded-sm">
            {product.badge}
          </div>
        )}

        {/* Sale badge */}
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-gold text-white text-caption tracking-wider uppercase px-2 py-1 rounded-sm">
            Sale
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-surface-950/40 flex items-end justify-center pb-6 transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, product.colors[0])
            }}
            className="flex items-center gap-2 bg-ivory-light text-surface-900 px-6 py-3 text-caption tracking-wider uppercase font-medium hover:bg-white transition-colors duration-200 rounded-sm"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Wishlist */}
        <button
          className={cn(
            'absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
          )}
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Product info */}
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="product-name-text text-body text-surface-900 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-body font-medium text-surface-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-body-sm text-surface-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <StarRating rating={product.rating} count={product.reviewCount} size="xs" />
      </Link>
    </article>
  )
}
