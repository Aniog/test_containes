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
    addItem(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-truffle-100 aspect-[3/4] mb-4">
        <img
          src={hovered && product.images[1] ? product.images[1].src : product.images[0].src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add — desktop */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-cream/95 backdrop-blur-sm text-truffle-800 text-xs tracking-widest uppercase py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 hover:bg-truffle-800 hover:text-cream"
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className="product-name text-sm md:text-base tracking-wider">{product.name}</h3>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex items-center text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < Math.round(product.rating) ? '#C8A96E' : 'none'} />
            ))}
          </div>
          <span className="text-xs text-truffle-400">({product.reviewCount})</span>
        </div>
        <p className="mt-1.5 text-sm font-medium text-truffle-800">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
