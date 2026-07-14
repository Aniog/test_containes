import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem, setCartOpen } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    setCartOpen(true)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.imageAlts[0]}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.imageAlts[1]}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick add button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full bg-white/95 backdrop-blur-sm text-stone-900 py-3 px-4 text-sm tracking-widest uppercase font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        )}

        {/* Badge for new/sale */}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs tracking-widest uppercase px-3 py-1">
            New
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-2">
        <h3 className="font-serif text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm text-stone-600">{product.rating}</span>
          <span className="text-sm text-stone-400">({product.reviewCount})</span>
        </div>

        <p className="text-stone-900 font-medium">${product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
