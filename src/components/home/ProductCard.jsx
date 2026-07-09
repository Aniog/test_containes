import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, product.variants[0], 1, {
      name: product.name,
      price: product.price,
      images: product.images,
    })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-warm mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.shortName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-base text-velmora-cream text-[10px] tracking-widest px-3 py-1.5">
            {product.badge.toUpperCase()}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-3 bg-velmora-base/90 text-velmora-cream text-xs tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag size={14} />
          ADD TO BAG
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-sm md:text-base tracking-wider text-velmora-base group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm-dark'}
            />
          ))}
          <span className="text-xs text-velmora-muted ml-1">({product.reviews})</span>
        </div>
        <p className="text-velmora-base mt-2 font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
