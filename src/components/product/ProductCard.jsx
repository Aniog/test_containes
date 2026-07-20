import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
          <img
            src={isHovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              addToCart(product, product.variants[0])
            }}
            className="absolute bottom-4 left-4 right-4 bg-primary/90 text-primary-foreground py-3 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-accent-foreground flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-sm mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-3 h-3 fill-accent text-accent" />
        <span className="text-xs text-muted-foreground">{product.rating}</span>
      </div>
      <p className="font-medium">${product.price}</p>
    </div>
  )
}
