import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={cn('group flex flex-col', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-taupe/30">
        <Link
          to={`/products/${product.slug}`}
          className="block h-full w-full"
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt=""
              className={cn(
                'pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                isHovered ? 'opacity-100' : 'opacity-0'
              )}
              loading="lazy"
            />
          )}
        </Link>
        <button
          type="button"
          onClick={() => addItem(product, product.tone[0], 1)}
          className={cn(
            'absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-2 bg-cream/95 py-3 text-xs font-medium uppercase tracking-wide text-charcoal shadow-sm backdrop-blur-sm transition-all duration-300',
            'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100',
            'focus:translate-y-0 focus:opacity-100'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center text-center">
        <StarRating rating={product.rating} size={12} />
        <h3 className="product-name mt-2 text-sm font-medium text-charcoal">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 font-sans text-sm font-medium text-warmgray">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
