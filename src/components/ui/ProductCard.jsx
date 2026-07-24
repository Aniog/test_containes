import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--color-charcoal)] text-[var(--color-cream)] text-[10px] tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full btn-accent text-xs py-3"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="product-name text-sm tracking-wider mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
          <span className="text-xs text-[var(--color-warm-gray)]">{product.rating} ({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
