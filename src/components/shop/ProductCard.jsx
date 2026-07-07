import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { useCart } from '@/contexts/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { formatPrice, cn } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { quantity: 1, tone: product.tone[0] })
  }

  return (
    <div
      ref={cardRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img
            alt={product.name}
            data-strk-img-id={product.image.imgId}
            data-strk-img={product.image.query}
            data-strk-img-ratio={product.image.ratio}
            data-strk-img-width={product.image.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={cn(
              'h-full w-full object-cover transition-transform duration-700',
              hovered && 'scale-105'
            )}
          />
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.hoverImage.imgId}
            data-strk-img={product.hoverImage.query}
            data-strk-img-ratio={product.hoverImage.ratio}
            data-strk-img-width={product.hoverImage.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>
        {product.bestseller && (
          <span className="pointer-events-none absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-espresso backdrop-blur-sm">
            Bestseller
          </span>
        )}
        {showQuickAdd && (
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              'absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-2 bg-cream py-3 text-xs uppercase tracking-[0.14em] text-espresso shadow-sm transition-all duration-300 hover:bg-espresso hover:text-cream',
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            )}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Quick Add
          </button>
        )}
      </div>
      <Link to={`/product/${product.id}`} className="mt-4 block text-center">
        <StarRating rating={product.rating} size={12} showValue={false} className="justify-center mb-2" />
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm uppercase tracking-[0.14em] text-espresso"
        >
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm text-taupe">{formatPrice(product.price)}</p>
      </Link>
    </div>
  )
}
