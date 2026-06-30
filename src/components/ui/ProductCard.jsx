import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden rounded-sm">
          <img
            data-strk-img-id={`product-${product.image}-a1b2c${index}`}
            data-strk-img={`[product-${product.id}-name] [product-${product.id}-desc]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.imageAlt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={`product-${product.image}-hover-d3e4f${index}`}
            data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name] worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Quick add button */}
          <div
            className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product, 'gold', 1)
              }}
              className="w-full py-2.5 bg-cream/95 backdrop-blur-sm text-stone-900 text-[10px] md:text-xs tracking-ultra-wide uppercase font-medium hover:bg-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3">
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-xs md:text-sm tracking-ultra-wide uppercase text-stone-900"
        >
          {product.name}
        </h3>
        <p id={`product-${product.id}-desc`} className="sr-only">{product.description}</p>
        <p className="text-xs md:text-sm text-stone-500 mt-1">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
