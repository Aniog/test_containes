import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-surface overflow-hidden">
        <img
          data-strk-img-id={hovered ? product.imgId2 : product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-foreground/90 font-sans text-xs uppercase tracking-widest text-center transition-all duration-300 border-none rounded-none ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          style={{ color: '#ffffff' }}
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-xs md:text-sm uppercase tracking-product text-foreground"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 font-sans text-sm text-muted">${product.price}</p>
      </div>
    </Link>
  )
}
