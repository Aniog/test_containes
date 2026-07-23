import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1, 'gold')
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-warm-gray overflow-hidden mb-4">
        {/* Primary image */}
        <div
          className="absolute inset-0 bg-warm-gray transition-transform duration-700 group-hover:scale-105"
          data-strk-bg={`[product-desc-${product.id}] [product-title-${product.id}] gold jewelry elegant`}
          data-strk-bg-id={`product-hero-${product.id}`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/10" />
        </div>

        {/* Quick add button — appears on hover */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-charcoal font-sans text-xs uppercase tracking-widest py-3 px-4 flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-colors duration-300"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p
          className="font-serif text-base md:text-lg uppercase tracking-widest-plus text-charcoal"
          id={`product-title-${product.id}`}
        >
          {product.name}
        </p>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}
              />
            ))}
          </div>
          <span className="font-sans text-xs text-graphite">({product.reviewCount})</span>
        </div>

        <p
          className="font-sans text-sm text-graphite leading-relaxed line-clamp-2"
          id={`product-desc-${product.id}`}
        >
          {product.description}
        </p>

        <p className="font-sans text-base font-medium text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
