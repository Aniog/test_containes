import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-brand-ivory aspect-[3/4]">
        <img
          data-strk-img-id={`${product.imgId}-card`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Hover overlay with quick add */}
        <div
          className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addItem(product)
          }}
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 bg-brand-charcoal/90 backdrop-blur-sm text-white text-xs tracking-widest uppercase transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </Link>

      {/* Product info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm md:text-base">{product.name}</h3>
        </Link>
        <p className="product-price mt-1">${product.price}</p>
      </div>
    </div>
  )
}
