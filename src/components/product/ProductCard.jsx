import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
          {/* Hidden product description for image query */}
          <span id={`product-card-name-${product.id}`} className="sr-only">{product.name} {product.category} gold jewelry</span>

          {/* Background image */}
          <div
            className="absolute inset-0"
            data-strk-bg-id={`product-card-img-${product.id}`}
            data-strk-bg={`[product-card-name-${product.id}]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="500"
          />

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3 className="font-serif text-xs uppercase tracking-product text-brand-espresso leading-relaxed">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-0.5 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3"
                fill={i < Math.floor(product.rating) ? '#C9A96E' : '#E8DFD3'}
                stroke={i < Math.floor(product.rating) ? '#C9A96E' : '#E8DFD3'}
              />
            ))}
            <span className="text-[10px] font-sans text-brand-muted-light ml-1">
              ({product.reviewCount})
            </span>
          </div>
          <p className="font-sans text-sm text-brand-charcoal mt-1.5 font-medium">
            ${product.price}
          </p>
        </div>
      </Link>

      {/* Quick add button on hover */}
      <div
        className={`absolute bottom-[88px] left-2 right-2 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addItem(product)
          }}
          className="w-full bg-brand-charcoal text-white py-2.5 font-sans text-[10px] uppercase tracking-wide-xl hover:bg-brand-gold transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
