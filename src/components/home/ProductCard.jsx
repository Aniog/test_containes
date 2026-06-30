import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCartDispatch } from '@/lib/CartContext'

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const dispatch = useCartDispatch()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'ADD_ITEM', payload: { id: product.id, name: product.name, price: product.price } })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-border/30 mb-4">
        {/* Image placeholder with gradient */}
        <div className="aspect-[3/4] bg-gradient-to-br from-amber-100/60 via-amber-200/30 to-amber-50/40 relative overflow-hidden">
          {/* Decorative gold shimmer */}
          <div className={`absolute inset-0 bg-gradient-to-b from-amber-300/0 to-amber-400/20 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-32 h-32 rounded-full bg-amber-300/20 blur-2xl transition-all duration-700 ${hovered ? 'scale-150 opacity-60' : 'scale-100 opacity-30'}`} />
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-base text-surface font-sans text-[10px] uppercase tracking-[0.08em]">
            {product.badge}
          </span>
        )}

        {/* Quick add button - appears on hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-base/90 backdrop-blur-sm text-white font-sans text-[11px] uppercase tracking-[0.08em] py-3 hover:bg-accent transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div>
        <h3 className="product-name text-xs md:text-sm text-base mb-1.5 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-border'}`}
              />
            ))}
          </div>
          <span className="font-sans text-[11px] text-muted">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-base font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
