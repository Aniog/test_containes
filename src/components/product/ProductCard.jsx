import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: '#F5F0E8' }}
        >
          <div className="text-center px-4">
            <span className="text-xs text-muted font-sans uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </div>

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-charcoal/90 text-white text-xs font-medium uppercase tracking-wider hover:bg-gold transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-sans text-xs font-medium text-charcoal uppercase tracking-product leading-tight">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted font-light">${product.price}</p>
      </div>
    </Link>
  )
}
