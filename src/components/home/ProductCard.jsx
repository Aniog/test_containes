import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
          <img
            data-strk-img-id={`bestseller-${product.id}-img1`}
            data-strk-img={`[bestseller-${product.id}-name] [bestseller-${product.id}-desc]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.id}-img2`}
            data-strk-img={`[bestseller-${product.id}-desc] [bestseller-${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className={`absolute bottom-3 left-3 right-3 bg-cream/95 text-charcoal py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-cream transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div>
        <h3
          id={`bestseller-${product.id}-name`}
          className="font-serif text-xs uppercase tracking-luxury text-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={`bestseller-${product.id}-desc`}
          className="text-xs text-muted-fg mt-0.5 hidden"
        >
          {product.shortDesc}
        </p>
        <p className="text-sm text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  )
}
