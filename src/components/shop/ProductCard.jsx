import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { StarRating } from '@/components/ui/StarRating'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

export function ProductCard({ product, className }) {
  const { addItem, openCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!defaultVariant.inStock) return
    addItem(product, defaultVariant, 1)
    openCart()
  }

  return (
    <article
      className={cn('group relative flex flex-col', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-[4/5] overflow-hidden bg-cream-dark"
      >
        <ResponsiveImage
          imgId={`product-card-${product.id}`}
          query={`${product.name} ${product.category} jewelry gold`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
        />
        {product.hoverImage && (
          <ResponsiveImage
            imgId={`product-card-hover-${product.id}`}
            query={product.hoverImage.query}
            ratio="4x5"
            width={600}
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-lux',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        {product.isBestseller && (
          <span className="absolute left-3 top-3 bg-cream-light/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-espresso backdrop-blur-sm">
            Bestseller
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          disabled={!defaultVariant.inStock}
          className={cn(
            'absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream-light transition-all duration-300 ease-lux',
            defaultVariant.inStock ? 'bg-espresso hover:bg-mocha' : 'bg-warm-gray cursor-not-allowed',
            'translate-y-full group-hover:translate-y-0'
          )}
        >
          <ShoppingBag className="h-4 w-4" />
          {defaultVariant.inStock ? 'Add to Cart' : 'Sold Out'}
        </button>
      </Link>

      <div className="mt-4 flex flex-col items-center text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-base uppercase tracking-widest-plus text-espresso transition-colors hover:text-gold sm:text-lg">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1.5 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-warm-gray">({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-espresso">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
