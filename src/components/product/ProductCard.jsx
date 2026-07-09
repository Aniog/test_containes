import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { productImageMap } from '@/data/images'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const cardRef = useRef(null)

  const primaryImg = productImageMap[product.images[0]]
  const secondaryImg = productImageMap[product.images[1]]

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current)
    }
  }, [hovered])

  return (
    <article
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-brand-warm">
        {/* Primary image */}
        <img
          data-strk-img-id={primaryImg?.strkImgId || `card-${product.id}-1`}
          data-strk-img={primaryImg?.strkImgQuery || 'gold jewelry elegant'}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            hovered ? 'opacity-0' : 'opacity-100'
          )}
        />

        {/* Secondary image (shown on hover) */}
        <img
          data-strk-img-id={secondaryImg?.strkImgId || `card-${product.id}-2`}
          data-strk-img={secondaryImg?.strkImgQuery || primaryImg?.strkImgQuery || 'gold jewelry detail'}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            hovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[0.6rem] tracking-[0.15em] uppercase bg-brand-ivory text-brand-charcoal px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 transition-all duration-300',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-brand-charcoal/90 backdrop-blur-sm text-brand-ivory font-sans text-[0.7rem] tracking-[0.15em] uppercase hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-[0.72rem]">{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-3 h-3',
                i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-taupe/30'
              )}
            />
          ))}
          <span className="font-sans text-[0.65rem] text-brand-taupe ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <p className="font-sans text-sm font-medium text-brand-charcoal mt-1.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
