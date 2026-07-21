import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'
import { cn } from '../../lib/utils'

export function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    await addToCart(product.id, 1, product.variants[0])
    setIsAdding(false)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-warmgray-100 mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          />
        )}

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 bg-charcoal-900 text-cream-50 text-xs px-2 py-1 tracking-wide">
            BESTSELLER
          </span>
        )}

        {/* Gift Set Badge */}
        {product.isGiftSet && (
          <span className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-xs px-2 py-1 tracking-wide">
            GIFT SET
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          disabled={isAdding}
          className={cn(
            'absolute bottom-0 left-0 right-0 py-3 bg-charcoal-900/90 backdrop-blur-sm text-cream-50 text-sm font-medium tracking-wide transition-all duration-300',
            'hover:bg-charcoal-900 flex items-center justify-center gap-2',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          {isAdding ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Adding...</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Quick Add</span>
            </>
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-charcoal-900">
          {product.name}
        </h3>
        <p className="text-xs text-warmgray-500">{product.subtitle}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          <span className="text-xs text-warmgray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-serif text-lg text-charcoal-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
