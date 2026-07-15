import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-charcoal-50 rounded overflow-hidden">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photo dark background`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="flex items-center gap-2 bg-white text-charcoal px-5 py-2.5 text-xs font-medium tracking-wider uppercase shadow-lg translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>

          {/* Bestseller badge */}
          {product.rating >= 4.8 && (
            <span className="absolute top-3 left-3 bg-charcoal text-white text-[10px] tracking-wider uppercase px-2.5 py-1 font-medium">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-[11px] font-medium tracking-wider uppercase text-charcoal hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-[11px] text-charcoal-400">{product.rating}</span>
        </div>
        <p className="font-serif text-lg text-charcoal mt-1">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
