import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, openCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-warm/20 overflow-hidden mb-3 md:mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add button - visible on mobile always, hover on desktop */}
        <div
          className={`absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-0 md:opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-base/90 backdrop-blur-sm text-velmora-cream font-sans text-xs tracking-widest uppercase py-2.5 md:py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-base transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="font-serif text-xs sm:text-sm md:text-base tracking-wider text-velmora-base group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="font-sans text-[10px] sm:text-xs text-velmora-muted mt-1 line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-1 mt-1.5 md:mt-2">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-[10px] sm:text-xs text-velmora-muted">{product.rating}</span>
          <span className="text-[10px] sm:text-xs text-velmora-muted-light">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm font-medium mt-1.5 md:mt-2">${product.price}</p>
      </div>
    </Link>
  )
}
