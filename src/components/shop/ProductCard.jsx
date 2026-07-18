import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] || 'Gold')
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden rounded-sm">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-charcoal text-white text-[10px] font-sans tracking-wider uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-velmora-charcoal py-3 text-xs font-sans tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="product-name text-sm md:text-base">{product.name}</h3>
        <p className="text-xs text-velmora-mid-gray mt-1 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-velmora-charcoal">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center gap-1">
            <Star size={12} fill="#b8860b" className="text-velmora-gold" />
            <span className="text-xs text-velmora-mid-gray">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
