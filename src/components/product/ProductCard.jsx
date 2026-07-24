import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice, cn } from '../../lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] || 'Gold')
  }

  return (
    <Link
      ref={containerRef}
      to={`/shop/${product.slug}`}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden mb-4">
        <img
          data-strk-img-id={product.imgIds[0]}
          data-strk-img={`[${product.subtitle.replace(/\s+/g, '-').toLowerCase()}] [${product.name.replace(/\s+/g, '-').toLowerCase()}] gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            hovered && product.imgIds[1] ? 'opacity-0' : 'opacity-100'
          )}
        />
        {product.imgIds[1] && (
          <img
            data-strk-img-id={product.imgIds[1]}
            data-strk-img={`[${product.name.replace(/\s+/g, '-').toLowerCase()}] worn jewelry model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-white text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal text-[10px] font-sans font-medium uppercase tracking-[0.15em] py-2.5 flex items-center justify-center gap-2 transition-all duration-300',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <ShoppingBag size={13} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      {/* Details */}
      <div>
        <h3 className="font-product-name text-sm md:text-[15px] text-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-warm-gray mb-2">{product.subtitle}</p>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm font-medium text-charcoal">
            {formatPrice(product.price)}
          </span>
          {product.rating && (
            <span className="flex items-center gap-1 text-xs text-warm-gray-light">
              <Star size={11} fill="currentColor" className="text-gold" />
              {product.rating}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
