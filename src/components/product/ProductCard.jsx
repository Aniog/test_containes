import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-100">
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-${product.id}-title] [product-${product.id}-desc] jewelry`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[0].alt}
          className={cn(
            'w-full h-full object-cover transition-transform duration-500',
            isHovered && 'scale-105'
          )}
          loading="lazy"
        />

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 bg-charcoal-800/90 text-white text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className={cn(
              'w-4 h-4 transition-colors',
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-charcoal-700'
            )}
          />
        </button>

        {/* Sale badge */}
        {product.originalPrice && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-white text-xs font-medium tracking-wider uppercase">
            Sale
          </span>
        )}

        {/* New badge */}
        {product.new && !product.originalPrice && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal-800 text-white text-xs font-medium tracking-wider uppercase">
            New
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        {/* Hidden text elements for image interpolation */}
        <span id={`product-${product.id}-title`} className="hidden">{product.name}</span>
        <span id={`product-${product.id}-desc`} className="hidden">{product.description}</span>
        
        <h3 className="font-serif text-lg md:text-xl tracking-wider uppercase text-charcoal-800">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-charcoal-800">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-charcoal-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <StarRating rating={product.rating} count={product.reviewCount} size="sm" />
        </div>
      </div>
    </Link>
  )
}
