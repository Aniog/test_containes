import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../cart/CartContext'

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-3x4 bg-cream overflow-hidden rounded-sm">
        <img
          data-strk-img-id={`${product.imgId}-main-${index}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`${product.imgId}-hover-${index}`}
          data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Quick Add */}
        <div className={`absolute bottom-0 left-0 right-0 bg-warm-black/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <ShoppingBag className="w-4 h-4 text-muted-gold" />
          <span className="text-xs uppercase tracking-widest text-text-light font-medium">Add to Cart</span>
        </div>

        {/* Clickable add to cart overlay button */}
        {hovered && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 h-10 opacity-0 cursor-pointer"
            aria-label={`Add ${product.name} to cart`}
          />
        )}
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-sm md:text-base tracking-wide-product uppercase text-text-primary"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-xs text-text-muted mt-0.5 line-clamp-1"
        >
          {product.type}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-muted-gold text-muted-gold" />
            <span className="text-xs text-text-secondary">{product.rating}</span>
          </div>
          <span className="text-sm font-medium text-text-primary">${product.price}</span>
        </div>
      </div>
    </Link>
  )
}
