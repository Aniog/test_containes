import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] || 'Gold')
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-50 mb-4">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-charcoal-800 text-ivory-50 text-[10px] font-medium tracking-[0.15em] uppercase">
            {product.badge}
          </span>
        )}

        {/* Primary image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Hover image */}
        <img
          src={product.imageHover || product.image}
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3 bg-charcoal-800/90 backdrop-blur-sm text-ivory-50 text-xs font-medium tracking-[0.15em] uppercase hover:bg-charcoal-900/90 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-charcoal-800 group-hover:text-gold-500 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold-400 text-gold-400'
                    : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-charcoal-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-sans text-sm font-medium text-charcoal-700">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
