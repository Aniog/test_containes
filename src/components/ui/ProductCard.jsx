import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../cart/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <div className="relative aspect-[3x4] overflow-hidden bg-cream">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />
        {/* Clickable overlay for navigation */}
        <Link
          to={`/product/${product.id}`}
          className="absolute inset-0 z-0"
        />
        {/* Quick add overlay — above the Link, visible on group-hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-10 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            data-add-to-cart
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="w-full bg-warm-black/90 text-white text-xs tracking-[0.1em] uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-warm-black transition-colors duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="text-product-name text-xs text-warm-black hover:text-gold transition-colors duration-300">{product.name}</h3>
        </Link>
        <p id={product.descId} className="text-xs text-warm-tan mt-0.5">{product.description}</p>
        <p className="text-sm font-medium text-warm-black mt-1">${product.price}</p>
      </div>
    </div>
  )
}
