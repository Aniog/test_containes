import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem, setCartOpen } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    setCartOpen(true)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300`} />
        
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 bg-white text-[#1a1a1a] py-3 text-xs tracking-wider font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          ADD TO CART
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium tracking-wide uppercase">{product.name}</h3>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-[#c9a96e] text-[#c9a96e]" />
          <span className="text-xs text-gray-600">{product.rating} ({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
