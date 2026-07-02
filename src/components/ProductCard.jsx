import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-4">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-ink text-cream text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1">
            {product.badge}
          </span>
        )}

        <img
          data-strk-img-id={product.imgId}
          data-strk-img={product.images.hero}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out',
            isHovered ? 'scale-105' : 'scale-100'
          )}
        />

        <img
          data-strk-img-id={product.altImgId}
          data-strk-img={product.images.alt}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-cream/95 text-ink font-sans font-semibold uppercase tracking-wider text-xs py-3 flex items-center justify-center gap-2 transition-transform duration-300 hover:bg-gold hover:text-ink',
            isHovered ? 'translate-y-0' : 'translate-y-full'
          )}
          aria-label={`Quick add ${product.name} to cart`}
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>

      <div className="space-y-1">
        <h3
          id={product.titleId}
          className="font-serif text-sm md:text-base uppercase tracking-widest text-ink font-medium"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-ink font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
