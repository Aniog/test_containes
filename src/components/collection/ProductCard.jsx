import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-taupe-light mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-velmora-base/90 backdrop-blur-sm text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-serif text-sm tracking-wider text-velmora-base group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-text-light mt-1">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="text-xs text-velmora-text-light">
              {product.rating}
            </span>
          </div>
          <p className="text-sm font-medium text-velmora-base">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  )
}
