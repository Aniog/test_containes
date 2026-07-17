import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-ink-100 aspect-[3/4] rounded-sm">
        <img
          src={hovered ? product.hoverImage : product.images[0]}
          alt={product.name}
          className="product-card-image w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-ink-900/10 flex items-end p-4 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full btn-accent text-xs py-2.5 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-3 md:mt-4 space-y-1">
        <h3 className="product-name text-ink-700 group-hover:text-ink-900 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-xs text-ink-400">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="font-serif text-lg text-ink-900">${product.price}</p>
      </div>
    </Link>
  )
}