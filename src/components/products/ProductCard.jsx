import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-cream-200 rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Secondary Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-espresso-800 text-cream-50 text-xs font-medium tracking-wide">
            {product.badge === 'bestseller' ? 'BESTSELLER' : 'NEW'}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 backdrop-blur-sm text-espresso-800 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-gold hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} />
            Add to Bag
          </span>
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-product-name text-xs text-espresso-800">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-cream-300'}
            />
          ))}
          <span className="text-xs text-espresso-800/50 ml-1">({product.reviews})</span>
        </div>

        <p className="font-medium text-espresso-800">${product.price}</p>
      </div>
    </Link>
  )
}
