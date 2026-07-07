import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'

export function ProductCard({ product, imgWidth = 600 }) {
  const { addItem } = useCart()

  return (
    <article className="group relative">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-linen">
          <img
            data-strk-img-id={`product-${product.id}-card`}
            data-strk-img={`[product-${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width={String(imgWidth)}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute inset-x-0 bottom-0 p-3 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100"
            onClick={(e) => e.preventDefault()}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product, 1)
              }}
              className="w-full bg-velmora-charcoal py-3 text-xs font-semibold uppercase tracking-[0.1em] text-velmora-text-light transition-colors duration-300 hover:bg-velmora-gold hover:text-velmora-charcoal"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3
            id={`product-${product.id}-name`}
            className="font-serif text-sm uppercase tracking-extra-wide text-velmora-text-dark"
          >
            {product.name}
          </h3>
          <div className="mt-1 flex items-center justify-center gap-2">
            <StarRating rating={product.rating} size={12} />
            <span className="text-xs text-velmora-text-muted">({product.reviews})</span>
          </div>
          <p className="mt-1 text-sm font-medium text-velmora-text-dark">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </article>
  )
}
