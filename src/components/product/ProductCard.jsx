import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

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
        {/* Image */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 text-cream text-xs uppercase tracking-widest py-2.5 font-medium transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <h3 className="font-serif text-xs md:text-sm uppercase tracking-[0.12em] text-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted">{formatPrice(product.price)}</p>
      </Link>
    </div>
  )
}
