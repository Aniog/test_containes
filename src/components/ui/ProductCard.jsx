import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import Button from './Button'

export default function ProductCard({ product, onQuickAdd }) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onQuickAdd(product, selectedVariant)
  }

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#E5DFD3] aspect-[4/3] mb-4">
        {/* Primary Image */}
        <img
          src={product.images?.[0] || `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=450&fit=crop`}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Secondary Image on Hover */}
        <img
          src={product.images?.[1] || product.images?.[0] || `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=450&fit=crop`}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Quick Add Button - appears on hover */}
        <div className={`absolute bottom-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleQuickAdd}
            className="flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 text-xs tracking-[1px] text-[#0A0806] hover:bg-[#C5A46E] hover:text-white transition-colors rounded"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-sm tracking-[2px] text-[#0A0806] group-hover:text-[#C5A46E] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#5C5346] text-sm">{formatPrice(product.price)}</p>
        <p className="text-xs text-[#8A7F6D]">{product.category}</p>
      </div>
    </Link>
  )
}
