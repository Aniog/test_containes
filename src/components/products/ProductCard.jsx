import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-1`}
          data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry product dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.images[0].alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-2`}
          data-strk-img={`[${product.id}-name] worn model jewelry warm lighting portrait`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.images[1].alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal-800 text-cream-50 text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <button
            onClick={handleQuickAdd}
            className="w-full bg-cream-50/95 backdrop-blur-sm text-charcoal-800 py-2.5 flex items-center justify-center gap-2 text-xs font-sans font-medium tracking-widest uppercase hover:bg-gold-500 hover:text-white transition-all duration-300"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Hidden text for image interpolation */}
      <span id={`${product.id}-name`} className="hidden">{product.name}</span>
      <span id={`${product.id}-desc`} className="hidden">{product.description}</span>

      {/* Product info */}
      <div className="text-center">
        <h3 className="text-product-name text-xs md:text-sm text-charcoal-800 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span className="font-sans text-sm font-medium text-charcoal-700">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-charcoal-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
