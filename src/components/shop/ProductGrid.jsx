import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-white/95 backdrop-blur-sm text-foreground text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </div>
      <h3 className="product-name text-sm text-center">{product.name}</h3>
      <div className="flex items-center justify-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={10}
            fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
            className="text-primary"
          />
        ))}
        <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
      </div>
      <p className="text-center text-sm font-medium mt-1">${product.price}</p>
    </Link>
  )
}

export default ProductCard
