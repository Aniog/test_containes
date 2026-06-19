import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, className = '' }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, (product.variants[0] || {}).value || 'gold')
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className={`group block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-4">
        {/* Primary image placeholder */}
        <div className="absolute inset-0 bg-velvet-200 flex items-center justify-center">
          <span className="text-velvet-400 text-xs tracking-[0.15em] uppercase">
            {product.name}
          </span>
        </div>

        {/* Hover overlay with Add to Cart */}
        <div
          className={`absolute inset-0 bg-black/5 flex items-end justify-center pb-4 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-velvet-900 px-4 py-2 rounded-sm text-xs tracking-[0.08em] uppercase font-semibold hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            <Plus className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-velvet-800 leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
            <span className="text-xs text-velvet-600 ml-0.5 font-medium">{product.rating}</span>
            <span className="text-xs text-velvet-400 ml-0.5">({product.reviewCount})</span>
          </div>
          <div className="w-px h-3 bg-velvet-200" />
          <span className="text-xs text-velvet-600">{product.material}</span>
        </div>
        <p className="mt-1.5 text-sm font-semibold text-velvet-900 tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
