import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] || 'gold')
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-200 mb-4">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-gold-600 text-cream-50 text-[9px] uppercase tracking-wider font-sans font-medium px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />

        {/* Secondary image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            loading="lazy"
          />
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-cream-50/95 backdrop-blur-sm text-slate-850 py-2.5 
                     flex items-center justify-center gap-2 text-[10px] uppercase tracking-ultra-wide font-sans font-medium
                     transition-all duration-300 border border-cream-300/50
                     ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <ShoppingBag size={13} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="product-name">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-cream-400'}
              />
            ))}
          </div>
          <span className="text-[10px] text-slate-850/40 font-sans">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm font-medium text-slate-850">${product.price}</p>
      </div>
    </Link>
  )
}
