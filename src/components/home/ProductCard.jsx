import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)
  const { addItem, toggleDrawer } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const defaultVariant = product.variants.find((v) => v.inStock)?.value || product.variants[0]?.value
    addItem(product, defaultVariant, 1)
    toggleDrawer()
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setImgIdx(0) }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-brand-cream">
        <img
          src={product.images[imgIdx]?.src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`
            absolute bottom-4 right-4 w-10 h-10 bg-white shadow-lg flex items-center justify-center
            transition-all duration-300
            ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}
          aria-label="Add to cart"
        >
          <Plus className="w-5 h-5 text-brand-base" />
        </button>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="px-2.5 py-1 bg-brand-base/80 text-white text-[10px] tracking-wider uppercase backdrop-blur-sm">
              Bestseller
            </span>
          )}
          {product.tags.includes('new-arrival') && (
            <span className="px-2.5 py-1 bg-brand-gold/90 text-white text-[10px] tracking-wider uppercase backdrop-blur-sm">
              New
            </span>
          )}
        </div>

        {/* Thumbnail dots on hover */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-1.5">
            {product.images.map((_, i) => (
              <button
                key={i}
                onMouseEnter={() => setImgIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === imgIdx ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <p className="product-name mb-1">{product.name}</p>
      <div className="flex items-center gap-2 mb-1.5">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.round(product.rating)
                  ? 'text-brand-gold fill-brand-gold'
                  : 'text-brand-muted-light'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-brand-muted">({product.reviews})</span>
      </div>
      <p className="price-tag">${product.price}</p>
    </Link>
  )
}
