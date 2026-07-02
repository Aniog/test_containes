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
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-sand/50 flex items-center justify-center mb-2">
                <span className="text-brand-gold text-lg">✦</span>
              </div>
              <span className="text-[10px] text-brand-warm-gray uppercase tracking-wider block">
                {product.category}
              </span>
            </div>
          </div>

          {/* Hover overlay with quick add */}
          <div
            className={`absolute inset-0 bg-brand-charcoal/10 flex items-end justify-center pb-4 transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="bg-brand-cream text-brand-charcoal px-5 py-2 text-xs font-sans font-medium tracking-wide-xl uppercase hover:bg-white transition-colors shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-3 text-center">
          <h3 className="font-sans text-[11px] font-medium tracking-product uppercase text-brand-charcoal">
            {product.name}
          </h3>
          <p className="text-sm font-serif text-brand-muted mt-1">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
