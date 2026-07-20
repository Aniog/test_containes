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
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image placeholder */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p id={`product-${product.id}-name`} className="text-xs text-muted-fg uppercase tracking-product font-sans">
                {product.name}
              </p>
              <p id={`product-${product.id}-cat`} className="text-[10px] text-muted-fg/60 mt-1 capitalize font-sans">
                {product.category}
              </p>
            </div>
          </div>

          <img
            data-strk-img-id={`product-card-${product.id}-a1b2`}
            data-strk-img={`[product-${product.id}-name] [product-${product.id}-cat] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Quick add overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal/90 text-white py-2.5 text-[10px] tracking-widest uppercase font-sans font-medium hover:bg-charcoal transition-colors border-none rounded-none"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3">
          <h3 className="font-sans text-xs font-medium text-charcoal uppercase tracking-product leading-tight">
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-sans text-charcoal">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
