import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

export default function ProductCard({ product: productProp }) {
  const product = products.find(p => p.id === productProp.id) || productProp
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-ivory border border-border overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] [${product.descId}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 z-10 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal/90 text-cream py-2.5 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold transition-colors duration-300 border-none cursor-pointer rounded-none"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <h3
          id={product.titleId}
          className="font-serif text-xs uppercase tracking-product text-charcoal mb-1"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="text-sm text-stone font-sans">${product.price}</p>
      </Link>
    </div>
  )
}
