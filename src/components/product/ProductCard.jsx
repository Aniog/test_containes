import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, showAddToCart = true }) {
  const [isHovered, setIsHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.defaultVariant)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div ref={cardRef} className="group">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div
          className="relative aspect-[3/4] bg-soft-sand overflow-hidden rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Primary image */}
          <img
            data-strk-img-id={`product-${product.id}-primary`}
            data-strk-img={`[product-${product.id}-name] [product-${product.id}-desc] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />

          {/* Secondary image on hover */}
          <img
            data-strk-img-id={`product-${product.id}-hover`}
            data-strk-img={`[product-${product.id}-name] detail jewelry model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} on model`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Hidden text elements for image queries */}
          <span id={`product-${product.id}-name`} className="hidden">{product.name}</span>
          <span id={`product-${product.id}-desc`} className="hidden">{product.description}</span>

          {/* Quick add button */}
          {showAddToCart && (
            <button
              onClick={handleAdd}
              className={`absolute bottom-0 left-0 right-0 py-3 text-center text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                isHovered
                  ? 'translate-y-0 opacity-100 bg-espresso/90 backdrop-blur-sm text-warm-white'
                  : 'translate-y-full opacity-0'
              } ${added ? 'bg-gold text-espresso' : ''}`}
            >
              {added ? 'Added to Bag' : 'Quick Add'}
            </button>
          )}
        </div>

        {/* Product info */}
        <div className="mt-4 px-0.5">
          <h3 className="font-serif text-[13px] tracking-[0.1em] uppercase font-semibold text-rich-brown leading-snug">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-gold text-gold'
                      : 'fill-transparent text-taupe/40'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-deep-taupe">({product.reviewCount})</span>
          </div>
          <p className="mt-1 text-sm font-medium text-rich-brown">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
